(function (Realm) {

    var Phaser = window.Phaser;
    var Manager = function (game, parent) {
        Phaser.Plugin.call(this, game, parent);
        this.game = game;
        this.onUpdate = new Phaser.Signal();
    };
    var p = Manager.prototype = Object.create(Phaser.Plugin.prototype);
    p.constructor = Manager;

    p.nextFrame = function () {
        this.game.pasued = false;
        this.onUpdate.addOnce(function () {
            this.game.paused = true;
        });

    };
    p.screenInspect = function(){
		var game = this.game;
		if (this.screenInspecting) {
			return this.stopScreenInspect();
		}
		var image = game.add.image(0, 0);
			image.inputEnabled = true;
			image.width  = game.width;
			image.height = game.height;
			image.name = 'Inspect Layer';
		image.events.onInputDown.add(this.onScreenInspect, this);
		this.onScreenInspectImage = image;
		this.screenInspecting = true;
	};

    p.stopScreenInspect = function(){
		this.onScreenInspectImage.destroy();
		this.onScreenInspectImage = null;
		this.screenInspecting = false;
	};
	p.onScreenInspect = function(){
		var game    = this.game;
		var world   = game.world;
		var pointer = game.input.activePointer;
		var obj = this.searchSpriteUnderPointer(world, pointer);
		this.collapseAll();
		obj = ( new DisplayObject(obj, this).expand() );
	};
	p.getObjectBounds = function (obj){
		var bounds = obj.getBounds();
		if (obj.children.length) {
			var groupBounds = Phaser.Group.prototype.getBounds.call(obj);
			bounds.x = min(bounds.x, groupBounds.x);
			bounds.y = min(bounds.y, groupBounds.y);
			bounds.width = max(bounds.width, groupBounds.width);
			bounds.height = max(bounds.height, groupBounds.height);
		}
		return bounds;
	};
	p.searchSpriteUnderPointer = function(parent, pointer){
		var children = parent.children;
		for (var i = children.length - 1; i >= 0; i--) {
			var child = children[i];
			if (child.alive && child.visible && child !== this.onScreenInspectImage) {
				var bounds = this.getObjectBounds(child);
				if ( bounds.contains(pointer.worldX, pointer.worldY) ){
					if (!child.children.length) return child;
					else  {
						var obj = this.searchSpriteUnderPointer(child, pointer);
						return obj || child;
					}
				}
			}
		}
	};

    window.Realm.Game = window.Realm.Game || {};
    window.Realm.Game.Manager = Manager;

})(window.Realm = window.Realm || {});