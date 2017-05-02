var State = {
    scene: {},
    init: function(scene) {
        if (this.scene.init) {
            this.scene.init();
        }

    },

    preload: function() {
        if (this.scene.preload) {
            this.scene.preload();
        }
    },

    create: function() {
        if (this.scene.create) {
            this.scene.create();
        }
    },

    update: function() {

        if (this.scene.update) {
            this.scene.update();
        }
    },
    render: function() {
        if (this.scene.render) {
            this.scene.render();
        }
    }
};

game.state.add("default", State);
game.state.start('default');

var Scene = State.scene;
