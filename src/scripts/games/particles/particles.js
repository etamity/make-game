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
var emitter;


Scene.create = function (){
   game.stage.backgroundColor = '#333333';
  emitter = game.add.emitter(game.world.centerX, game.world.centerY, 250);
  emitter.makeParticles("pack3", 0, 250, false, false);
  emitter.minParticleSpeed.setTo(-400, -400);
  emitter.maxParticleSpeed.setTo(400, 400);
  emitter.gravity = 0;
  emitter.start(false, 4000, 15, 0, 0);

};
