(function(Realm) {

    var Scene = function(url) {
        // this.assets = assets;
        this.configUrl = url;
    }
    var p = Scene.prototype = Object.create(Phaser.State.prototype);
    p.constructor = Scene;

    p.init = function (){

    }
    p.preload = function() {
        if (this.configUrl) {
            this.game.load.pack("pack", this.configUrl, null, this); 
        }

        if (this.onPreload) {
            this.onPreload();
        } 
    }

    p.create = function(){
        if (this.onCreate) {
            this.onCreate();
        }
    }
    p.update = function () {
        if (this.onUpdate) {
            this.onUpdate();
        } 
    }
    p.render = function (){
      if (this.onRender) {
            this.onRender();
        } 
    }
    window.Realm.Game = window.Realm.Game || {};
    window.Realm.Game.Scene = Scene;

})(window.Realm = window.Realm || {});
