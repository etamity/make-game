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

var paddle, ball, local, brick, y, x, offetX, bricks, particles, _brick, _ball, _paddle;

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
   (function(){var image = game.add.image(0, 0, "pack4", 25);
   image.width = game.width;
   image.height = game.height;
  })(game);
  game.sound.play('Cheerful_Annoyance', 1, true);
  game.physics.startSystem(Phaser.Physics.Arcade);
  game.physics.arcade.checkCollision.down = false;
  bricks = game.add.physicsGroup();
  game.physics.enable(bricks);
  offetX = (game.width - 10 * 55) / 2;
  for (y = 0; y <= 4; y++) {
    for (x = 0; x <= 9; x++) {
      brick = bricks.add(game.add.sprite((offetX + x * 55), (20 + y * 60), "pack4", 17));
      brick.body.bounce.set(1, 1);
      brick.body.immovable = true;
      brick.width = 32;
       brick.height = 32;
    }
  }
  paddle = game.add.sprite(game.world.centerX, (game.world.height - 32), "pack3", 70);
  paddle.anchor.set(0.5, 0.5);
  game.physics.enable(paddle);
  paddle.body.collideWorldBounds = true;
  paddle.body.bounce.set(1, 1);
  paddle.body.immovable = true;
  ball = game.add.sprite(game.world.centerX, (game.height - 55), "pack2", 17);
  ball.width = 24;
   ball.height = 24;
  ball.anchor.set(0.5, 0.5);
  ball.checkWorldBounds = true;
  game.physics.enable(ball);
  ball.body.collideWorldBounds = true;
  ball.body.bounce.set(1, 1);
  game.input.reset(true);
  // Describe this function...
  game.input.onDown.add(function releaseBall2() {
    if (local.ballOnPaddle == true) {
      local.ballOnPaddle = false;
      ball.body.velocity.set(-300, (mathRandomInt(-300, -200)));
    }
  }, this);
  local = {};
  local.ballOnPaddle = true;
  // Describe this function...
  ball.events.onOutOfBounds.add(function do_something3() {
    local.ballOnPaddle = true;
    ball.reset(paddle.x, (game.height - 55), 0);
    game.sound.play('gameover3', 1, false);
  }, this);

};

Scene.update = function (){
   paddle.x = game.input.x;
  if (paddle.x < 55) {
    paddle.x = 55;
  } else if (paddle.x > game.width - 55) {
    paddle.x = (game.width - 55);
  }
  if (local.ballOnPaddle == true) {
    ball.body.position.x = paddle.x;
  } else {
    // Describe this function...
    game.physics.arcade.collide(ball, paddle, function do_something(_ball, _paddle) {
      local.diff = 0;
      if (_ball.x < _paddle.x) {
        local.diff = (_paddle.x - _ball.x);
        _ball.body.velocity.x = (-10 * local.diff);
      } else if (_ball.x > _paddle.x) {
        local.diff = (_ball.x - _paddle.x);
        _ball.body.velocity.x = (10 * local.diff);
      } else {
        _ball.body.velocity.x = (2 + mathRandomInt(1, 16));
      }
      game.sound.play('hit3', 1, false);
    });
    // Describe this function...
    game.physics.arcade.collide(ball, bricks, function do_something2(_ball, _brick) {
      _brick.kill();
      game.sound.play('coin5', 1, false);
      particles = game.add.emitter(_brick.x, _brick.y, 0);
      particles.makeParticles("pack1", 356, 50, false, false);
      particles.minParticleSpeed.setTo(-800, -800);
      particles.maxParticleSpeed.setTo(800, 800);
      particles.setAlpha(0.5, 1, 0);
      particles.start(true, 2000, 1, 10, 0);
    });
  }

};

