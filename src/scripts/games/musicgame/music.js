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
var sound_loop, loops_music, group, star, ball, item, _ball, _star;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Scene.create = function (){
   (function(){var image = game.add.image(0, 0, "spritesheet_backtiles", 14);
   image.width = game.width;
   image.height = game.height;
  })(game);
  ball = game.add.sprite(0, 0, "spritesheet_tilesBlack", 34);
  ball.width = 64;
   ball.height = 64;
  game.physics.enable(ball);
  ball.body.velocity.set(150, 140);
  ball.body.gravity.set(400, 233);
  ball.body.bounce.set(1, 1);
  ball.body.collideWorldBounds = true;
  group = game.add.physicsGroup();
  star = group.add(game.add.sprite(game.world.centerX, game.world.centerY, "pack3", 65));
  star = group.add(game.add.sprite((game.width - 237), (game.height - 137), "pack3", 59));
  star = group.add(game.add.sprite(40, (game.height - 100), "pack3", 49));
  star.width = 32;
   star.height = 32;
  star = group.add(game.add.sprite(340, 50, "pack3", 70));
  star = group.add(game.add.sprite(70, (game.height - 364), "spritesheet_particles", 16));
  star.width = 64;
   star.height = 64;
  star = group.add(game.add.sprite((game.width - 145), 180, "pack3", 28));
  star = group.add(game.add.sprite((game.width - 45), (game.height - 145), "spritesheet_backtiles", 6));
  star.width = 64;
   star.height = 64;
  star = group.add(game.add.sprite(10, (game.height - 245), "spritesheet_coins", 0));
  star.width = 64;
   star.height = 64;
  game.physics.enable(group);
  group.setAll('body.collideWorldBounds', true);
  group.setAll('body.bounce', new Phaser.Point(1, 1));
  group.setAll('body.immovable', false);
  loops_music = game.add.audio('Caution_Beat');
  sound_loop = {};
  sound_loop.loop0 = game.add.audio('12_String_Dream_02');
  sound_loop.loop1 = game.add.audio('Titanic_Dub_Beat.2');
  sound_loop.loop2 = game.add.audio('12_String_Dream_05');
  sound_loop.loop3 = game.add.audio('12_String_Dream_06');
  sound_loop.loop4 = game.add.audio('12_String_Dream_07');
  sound_loop.loop5 = game.add.audio('Against_Time_Sax_Sample');
  sound_loop.loop6 = game.add.audio('Brazilian_Guitar_03');
  sound_loop.loop7 = game.add.audio('Brooklyn_Nights_Synth');
  sound_loop.loop8 = game.add.audio('Choral_Tension_Strings');
  sound_loop.loop9 = game.add.audio('Classic_Rock_Piano_13');
  sound_loop.loop10 = game.add.audio('Classic_Rock_Steel_05');
  sound_loop.loop11 = game.add.audio('French_Horn_Solo_25');
  sound_loop.loop12 = game.add.audio('Demur_All');
  sound_loop.loop13 = game.add.audio('Hoist_Strings');
  sound_loop.loop14 = game.add.audio('Klezmer_Bend_Horn_04');
  sound_loop.loop15 = game.add.audio('Klezmer_Bend_Horn_07');
  sound_loop.loop16 = game.add.audio('Orchestrated_Chaos_Topper');
  sound_loop.loop17 = game.add.audio('Plastic_Melody_Bass');
  sound_loop.loop18 = game.add.audio('Remix_Guitar_FX_04.2');

};

Scene.update = function (){
   // Describe this function...
  game.physics.arcade.collide(ball, group, function do_something(_ball, _star) {
    if (loops_music.isPlaying == false) {
      loops_music.play('', 0, 1, true);
    } else {
      item = {};
      item.index = (mathRandomInt(0, 18));
      item.loopName = (String('loop') + String(item.index));
      item = sound_loop[item.loopName];
      if (item.isPlaying == false) {
        item.play('', 0, 1, false);
      } else {
        item.fadeOut();
      }
    }
  });
  // Describe this function...
  game.physics.arcade.collide(group, group, function do_something2(_ball, _star) {
    item = {};
    item.index = (mathRandomInt(0, 18));
    item.loopName = (String('loop') + String(item.index));
    item = sound_loop[item.loopName];
    if (item.isPlaying == false) {
      item.play('', 0, 1, false);
    } else {
      item.fadeOut();
    }
  });
  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    ball.body.gravity.y = -350;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
    ball.body.gravity.y = 350;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    ball.body.gravity.x = -350;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    ball.body.gravity.x = 350;
  }

};
