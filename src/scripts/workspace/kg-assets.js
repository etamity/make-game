(function(Realm) {

    var Assets = function(parent) {
        this.game = window.Realm.Game.Storage.getVariable('game');
        this.container = Assets.container;
        if (parent) {
            parent.appendChild(this.container);
        }
        window.Realm.Game.Assets.instance = this;
    };
    var p = Assets.prototype = Object.create({});
    p.constructor = Assets;
    p.load = function(config, callback) {
        let name = config.assets,
            url = Assets.getAssetsPackUrl(name);
        this.config = config;
        this.loadFile(config.jsfile, (js) => {
            if (config.xml) {
                this.loadFile(config.xml, (xml) => {
                    if (callback) {
                        callback(js, xml, url);
                    }
                });
            } else {
                if (callback) {
                    callback(js, '', url);
                }
            }
        
        });
    };
    p.loadFile = function(file, callback) {
        fetch(file)
            .then((r) => {
                return r.text();
            })
            .then((js) => {
                if (callback) {
                    callback(js);
                }
            });
    };

    p.attach = function() {
        this.buildImagesContainer(this.container);
    };

    p.buildImagesContainer = function(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        var game = this.game;
        var keys = game ? game.cache.getKeys(Phaser.Cache.IMAGE) : [];
        for (var key in keys) {
            var keyName = keys[key];
            container.setAttribute('key', keyName);
            var count = game.cache.getFrameCount(keyName);
            var image = game.cache.getImage(keyName);
            for (var i = 0; i < count; i++) {
                var frame = game.cache.getFrameByIndex(keyName, i, Phaser.Cache.IMAGE);
                var canvas = document.createElement('canvas');
                canvas.width = frame.width;
                canvas.height = frame.height;
                var context = canvas.getContext('2d');
                context.drawImage(image, frame.x, frame.y, frame.width, frame.height, 0, 0, canvas.width, canvas.height);
                var toDataURL = canvas.toDataURL();
                var img = document.createElement("img");
                img.src = toDataURL;
                img.setAttribute('index', frame.index);
                img.style.padding = '5px';
                img.style.maxWidth = '128px';
                img.style.maxHeight = '128px';
                img.style.minWidth = '32px';
                img.style.minHeight = '32px';
                img.setAttribute('alt', keyName);

                img.onmouseover = onmouseover;
                img.onmouseout = onmouseout;
                container.appendChild(img);
            }
        }

        function onmouseout(e) {
            var img = e.target;
            img.style.borderWidth = "0px";
            img.style.borderStyle = "none";
        }

        function onmouseover(e) {
            var img = e.target;
            img.style.borderWidth = "2px";
            img.style.borderColor = "green";
            img.style.borderStyle = "solid";
            img.style.borderRadius = "5px";
        }

        return container;
    }

    Assets.getAssetsPackUrl = (name) => {
        return 'assets/images/game/' + name + '/pack.json'
    }
    Assets.container = (function() {
        var container = document.createElement("div");
        container.style.width = "300px";
        container.style.height = "300px";
        container.style.overflowY = "scroll";
        container.style.backgroundColor = "white";
        container.style.borderWidth = "5px";
        container.style.borderColor = "gray";
        container.style.borderStyle = "solid";
        container.style.padding = "5px";
        return container;
    })();

    window.Realm.Game.Assets = Assets;

})(window.Realm = window.Realm || {});
