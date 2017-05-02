let fs = require('fs');
let path = require('path');
let mkdirp = require('mkdirp');
let Vulcan = require('vulcanize');
let rimraf = require('rimraf');
let treeify = require('treeify');

function makeTree (opts) {
    let root = {};
    root.endpoint = opts.shell;
    root.path = path.join(opts.root, opts.shell);
    return createChildren(root, { root: opts.root }).then(node => {
        return root;
    });
}

function createChildren (node, opts) {
    let dir = path.dirname(node.path);
    return getDependencies(node.path).then(deps => {
        let tasks,
            p;
        node.children = deps;
        tasks = node.children.map(childNode => {
            if (childNode.endpoint.charAt(0) === '/') {
                childNode.path = path.join(opts.root, childNode.endpoint);
            } else {
                childNode.path = path.join(dir, childNode.endpoint);
            }
            childNode.parent = node;
            return childNode;
        }).filter(child => {
            p = node;
            // Lookup the tree to see if the file was already imported in that path before
            while (p) {
                if (!p.parent) {
                    return true;
                }
                if (p.path === child.path) {
                    return false;
                }
                p = p.parent;
            }
            return true;
        }).map(child => {
            return createChildren(child, opts);
        });
        return Promise.all(tasks);
    });
}

let nodeCache = {};

function getDependencies (filePath, ignoreLazy) {
    let lazyReg = /<link.*rel="(lazy-)?import".*>/gi,
        importReg = /<link.*rel="import".*>/gi,
        commentReg = /<\!--[\s\S]*-->/gi;
    if (nodeCache[filePath]) {
        let copy = nodeCache[filePath].map(file => {
            return Object.assign({}, file);
        });
        return Promise.resolve(copy);
    }
    return new Promise((resolve, reject) => {
        let dir = path.dirname(filePath);
        fs.readFile(filePath, (err, file) => {
            if (err) {
                console.log(`Could not read '${filePath}'`);
                return resolve([]);
            }
            let content = file.toString().replace(commentReg),
                importRegex = ignoreLazy ? importReg : lazyReg,
                imports = content.match(importRegex),
                fileRegex,
                files,
                tasks;

            if (!imports) {
                return resolve([]);
            }
            fileRegex = /href="([^"]*)"/,
            files = imports.map((importLine) => {
                let m = importLine.match(fileRegex),
                    dep = {}, endpoint;
                if (m && m[1]) {
                    endpoint = m[1];
                    if (importLine.match(/rel="lazy-import"/)) {
                        dep.lazy = true;
                    }
                    dep.endpoint = endpoint;
                }
                return dep;
            }).filter((dep) => {
                return Boolean(dep.endpoint);
            });
            nodeCache[filePath] = files.slice(0);
            resolve(files);
        });
    });
}

function findLeaves (root) {
    let leaves = [];
    function iterate (node) {
        if (node.children && node.children.length) {
            node.children.forEach(iterate);
        } else if (!node.moved && !node.lazy) {
            // Leaf
            leaves.push(node);
        }
    }
    iterate(root);
    return leaves;
}

function bundleLeaf (leaf, leaves) {
    let similarLeaves = leaves.filter(l => l.path === leaf.path),
        endpoint, p, shortest, shortests;
    let s = similarLeaves.map(l => {
        let i = 0;
        endpoint = l.parent;
        // Find closest endpoint for that leaf to be bundled with
        while (endpoint.parent && !endpoint.lazy) {
            endpoint = endpoint.parent;
        }
        p = endpoint;
        // Get distance from this endpoint to the root
        while (p.parent) {
            p = p.parent;
            i++;
        }
        return {
            leaf: l,
            endpoint,
            distance: i
        };
    });
    shortest = s[0];
    s.forEach(node => {
        if (node.distance < shortest.distance) {
            shortest = node;
        }
    });
    shortests = s.filter(node => {
        return node.distance === shortest.distance;
    });
    parentBundle = shortest.endpoint;
    if (shortests.length > 1) {
        shortests = shortests.map(s => s.endpoint.path)
            .filter((path, index, self) => self.indexOf(path) === index);
        // Same leaf is in two endpoints at the same distance from the root.
        if (shortests.length > 1) {
            parentBundle = parentBundle.parent;
            while (parentBundle.parent && !parentBundle.lazy) {
                parentBundle = parentBundle.parent;
            }
        }
    }
    let existsInEndpoint = false,
        existingIndex,
        l = similarLeaves[0];
    parentBundle.children.forEach((c, index) => {
        if (c.path === l.path) {
            existsInEndpoint = true;
            existingIndex = index;
        }
    });
    if (!existsInEndpoint) {
        let copy = Object.assign({}, l);
        copy.moved = true;
        copy.parent = parentBundle;
        parentBundle.children.push(copy);
    } else {
        parentBundle.children[existingIndex].moved = true;
    }
    similarLeaves.forEach(l => {
        if (l.parent.path !== parentBundle.path) {
            let index = l.parent.children.indexOf(l);
            l.parent.children.splice(index, 1);
        }
    });
}

function flattenEndpoints (node) {
    let endpoints = [node];
    function iterate (node) {
        if (node.children && node.children.length) {
            node.children.forEach((child) => {
                if (child.lazy || !child.parent) {
                    endpoints.push(child);
                }
                iterate(child);
            });
        }
    }
    iterate(node);

    function iterateClean (node) {
        let endpointDep;
        if (node.lazy) {
            if (node.parent) {
                let p = node.parent;
                while (p) {
                    if (p.lazy || !p.parent) {
                        endpointDep = p.path;
                        break;
                    }
                    p = p.parent;
                }
                node.parentDep = endpointDep;
                node.parent = null;
            }
        }
        if (node.children && node.children.length) {
            node.children.forEach((child) => {
                if (child.lazy) {
                    let index = node.children.indexOf(child);
                    node.children.splice(index, 1);
                }
                iterateClean(child);
            });
        }
    }
    endpoints.forEach(iterateClean);
    return endpoints;
}

function vulcanizeLazy (endpoint) {

    let dependencies = [];

    function iterate (filePath) {
        return getDependencies(filePath)
            .then(deps => {
                deps = deps.filter((dep, index) => {
                    if (dep.lazy) {
                        return false;
                    }
                    if (dependencies.indexOf(dep.path) === -1) {
                        dependencies.push(dep.path);
                        return true;
                    } else {
                        return false;
                    }
                });
                return Promise.all(deps.map(dep => iterate(dep.path)));
            });
    }

    return iterate(endpoint.path).then(deps => {
        let needed = endpoint.children.map(d => d.path),
            diff = dependencies.filter(path => needed.indexOf(path) == -1),
            external = needed.filter(path => dependencies.indexOf(path) == -1);
        return {
            exclude: diff,
            external,
            dependencies
        };
    }).then(info => {
        let dir = path.dirname(endpoint.path),
            outPath = path.join(dir, 'shared.html'),
            url, fileContent, fd;
        if (info.external.length) {
            fileContent = info.external.reduce((acc, dep) => {
                url = path.relative(dir, dep);
                return acc += `<link rel="import" href="${url}">\n`;
            }, '');
            mkdirp.sync(dir);
            fd = fs.openSync(outPath, 'w');
            fs.writeSync(fd, fileContent);
            return new Promise((resolve, reject) => {
                let vulcan, fd;

                vulcan = new Vulcan({
                    abspath: null,
                    inlineScripts: true,
                    inlineCss: true,
                    stripExcludes: info.dependencies,
                    addedImports: ['shared.html'],
                    inputUrl: outPath,
                    stripComments: true
                });

                vulcan.process(null, (err, doc) => {
                    if (err) {
                        reject(err);
                    } else {
                        fd = fs.openSync(outPath, 'w');
                        info.shared = {
                            path: 'shared.html',
                            content: doc
                        };
                        resolve(info);
                    }
                });
            });
        }
        return info;
    }).then(info => {
        return new Promise((resolve, reject) => {
            let vulcan, vulcanOptions;

            vulcanOptions = {
                abspath: null,
                inlineScripts: true,
                inlineCss: true,
                inputUrl: endpoint.path,
                stripComments: true
            };

            vulcanOptions.addedImports = [];

            if (endpoint.parentDep) {
                vulcanOptions.addedImports.push(path.relative(path.dirname(endpoint.path), endpoint.parentDep));
            }

            vulcanOptions.stripExcludes = info.exclude;

            vulcan = new Vulcan(vulcanOptions);

            vulcan.process(null, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    let file = {
                        content: doc
                    };
                    // Swap the content of the files if need to import additional dependencies
                    if (info.shared) {
                        file.content = info.shared.content
                        file.sharedContent = doc;
                    }
                    resolve(file);
                }
            });
        });
    });
}

function build(opts) {
    let common = [];

    return makeTree(opts).then(node => {
        let leaves = findLeaves(node),
            endpoints;
        while (leaves[0]) {
            bundleLeaf(leaves[0], leaves);
            leaves = findLeaves(node);
        }
        endpoints = flattenEndpoints(node);
        endpoints.forEach(e => {
            console.log(`Endpoint: ${e.path}`);
            console.log(`\tUnique dependencies: ${e.children.length}`);
            console.log(`\tParent endpoint: ${e.parentDep}`);
            e.children.forEach(c => {
                console.log(`\t\t| ${c.path}`);
            });
        });
        return Promise.all(endpoints.map(endpoint => {
            return vulcanizeLazy(endpoint);
        })).then(docs => {
            docs.forEach((file, index) => {
                let outPath = path.join(opts.dest, path.relative(opts.root, endpoints[index].path));
                mkdirp.sync(path.dirname(outPath));
                fd = fs.openSync(outPath, 'w');
                fs.writeSync(fd, file.content);
                if (file.sharedContent) {
                    let outPath = path.join(opts.dest, path.dirname(path.relative(opts.root, endpoints[index].path)), 'shared.html');
                    fd = fs.openSync(outPath, 'w');
                    fs.writeSync(fd, file.sharedContent);
                }
            });
        });
    }).catch(err => {
        throw err;
    });
}

module.exports = {
    build
};
