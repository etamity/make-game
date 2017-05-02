'use strict';

const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mergeStream = require('merge-stream');
const polymerBuild = require('polymer-build');

const swPrecacheConfig = require('./sw-precache-config.js');
const polymerJson = require('./polymer.json');
const polymerProject = new polymerBuild.PolymerProject(polymerJson);
const buildDirectory = 'build';
const logger = require('gulp-logger');
const uglify = require('gulp-uglifyjs');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-babel-minify');
const htmlMinifier = require('gulp-html-minifier');

const url = require('url');
const fs = require('fs');
const browserSync = require('browser-sync');

/**
 * Waits for the given ReadableStream
 */
function waitFor(stream) {
    return new Promise((resolve, reject) => {
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

function build() {
    return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        // Okay, so first thing we do is clear the build directory
        console.log(`Deleting ${buildDirectory} directory...`);
        del([buildDirectory])
            .then(() => {
                // Okay, now let's get your source files
                let sourcesStream = polymerProject.sources()
                    // Oh, well do you want to minify stuff? Go for it!
                    // Here's how splitHtml & gulpif work
                    .pipe(polymerProject.splitHtml())
                    .pipe(gulpif('/\.js$/', babel({
                        presets: ['babili']
                    })))
                    .pipe(gulpif('/\.js$/', minify()))
                    .pipe(gulpif('/\.css$/', cleanCSS()))
                    .pipe(gulpif('/\.html$/', htmlmin({
                        collapseWhitespace: true,
                        removeComments: true,
                        minifyCSS: true,
                        uglifyJS: true
                    })))
                    // .pipe(gulpif(/\.js$/, uglify()))
                    // .pipe(gulpif(/\.css$/, cssSlam()))
                    // .pipe(gulpif(/\.html$/, htmlMinifier()))
                    // .pipe(gulpif(/\.(png|gif|jpg|svg)$/, imagemin()))
                    // .pipe(logger({
                    //     before: 'minify image file...',
                    //     after: 'complete!',
                    //     showChange: true
                    // }))
                    .pipe(polymerProject.rejoinHtml());

                // Okay, now let's do the same to your dependencies
                let dependenciesStream = polymerProject.dependencies()
                    .pipe(logger({
                        before: 'Starting building dependencies files...',
                        after: 'complete!',
                        showChange: true
                    }))
                    .pipe(polymerProject.splitHtml())
                    // .pipe(gulpif('/\.js$/', babel({
                    //     presets: ['babili']
                    // })))
                    // .pipe(gulpif('/\.js$/', minify()))
                    // .pipe(gulpif('/\.css$/', cleanCSS()))
                    // .pipe(gulpif('/\.html$/', htmlmin({
                    //     collapseWhitespace: true,
                    //     removeComments: true,
                    //     minifyCSS: true,
                    //     uglifyJS: true
                    // })))
                    // .pipe(gulpif(/\.js$/, uglify()))
                    // .pipe(gulpif(/\.css$/, cssSlam()))
                    // .pipe(gulpif(/\.html$/, htmlMinifier()))
                    .pipe(polymerProject.rejoinHtml());

                // Okay, now let's merge them into a single build stream
                let buildStream = mergeStream(sourcesStream, dependenciesStream)
                    .once('data', () => {
                        console.log('Analyzing build dependencies...');
                    });

                // If you want bundling, pass the stream to polymerProject.bundler.
                // This will bundle dependencies into your fragments so you can lazy
                // load them.
                buildStream = buildStream.pipe(polymerProject.bundler);

                // Okay, time to pipe to the build directory
                buildStream = buildStream.pipe(gulp.dest(buildDirectory));

                // waitFor the buildStream to complete
                return waitFor(buildStream);
            })
            .then(() => {
                // Okay, now let's generate the Service Worker
                console.log('Generating the Service Worker...');
                return polymerBuild.addServiceWorker({
                    project: polymerProject,
                    buildRoot: buildDirectory,
                    bundled: true,
                    swPrecacheConfig: swPrecacheConfig
                });
            }).then(() => {
                console.log('Build complete!');
                resolve();
            })



    });
}

gulp.task('build', build);


gulp.task('message', function() {
    return new Promise(function(resolve, reject) {
         del([buildDirectory]).then(() => {
            console.log("1");
         }).then(() =>{
            console.log("2");
         }).then(() =>{
            console.log("3");
         }).then(() =>{
            resolve();
         })
    

    });
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            middleware: function(req, res, next) {
                var fileName = url.parse(req.url);
                fileName = fileName.href.split(fileName.search).join("");
                var fileExists = fs.existsSync('src' + fileName);
                if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
                    req.url = "/index.html";
                }
                return next();
            }
        },
        port: 8080,
        open: false
    });
    return gulp.watch('./src/**/*').on('change', function(e) {
        browserSync.reload();
    });
});
