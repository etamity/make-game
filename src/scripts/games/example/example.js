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

var player, group, offsetX, level;


Scene.create = function (){
   game.physics.startSystem(Phaser.Physics.Arcade);
  (function(){var image = game.add.image(0, 0, "bg_colored_castle", 0);
   image.width = game.width;
   image.height = game.height;
  })(game);
  group = game.add.physicsGroup();
  level = {};
  offsetX = 100;
  level.block0 = group.add(game.add.sprite((game.width - offsetX), (game.height - 220), "spritesheet_explosive", 25));
  level.block1 = group.add(game.add.sprite((game.width - (offsetX + 200)), (game.height - 220), "spritesheet_explosive", 25));
  level.block2 = group.add(game.add.sprite((game.width - (offsetX + 180)), (game.height - 290), "spritesheet_explosive", 13));
  level.block3 = group.add(game.add.sprite((game.width - (offsetX + 110)), (game.height - 360), "spritesheet_explosive", 11));
  level.block4 = group.add(game.add.sprite((game.width - (offsetX + 140)), (game.height - 430), "spritesheet_elements", 0));
  player = game.add.sprite(0, 0, "spritesheet_elements", 10);
  game.physics.enable(player);
  player.body.collideWorldBounds = true;
  game.physics.enable(group);
  group.setAll('body.gravity', new Phaser.Point(0, 400));
  group.setAll('body.collideWorldBounds', true);
  player.body.bounce.set(1, 1);
  player.body.gravity.y = 400;
  player.checkWorldBounds = true;

};

Scene.update = function (){
   player.body.velocity.set(0, 0);
  game.physics.arcade.collide(group, group, null);
  game.physics.arcade.collide(player, group, null);
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    player.body.velocity.x = -400;
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    player.body.velocity.x = 400;
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    player.body.velocity.y = -400;
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
    player.body.velocity.y = 400;
  }

};
