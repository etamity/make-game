var EnemyTank = function(index, game, player) {

    var x = game.world.randomX;
    var y = game.world.randomY;
    this.game = game;
    this.health = 3;
    this.player = player;
    this.fireRate = 1000;
    this.nextFire = 0;
    this.alive = true;

    this.shadow = game.add.sprite(x, y, 'enemy', 'shadow');
    this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
    this.turret = game.add.sprite(x, y, 'enemy', 'turret');


    this.shadow.anchor.set(0.5);
    this.tank.anchor.set(0.5);
    this.turret.anchor.set(0.3, 0.5);

    this.tank.name = index.toString();
    game.physics.enable(this.tank, Phaser.Physics.ARCADE);
    this.tank.body.immovable = false;
    this.tank.body.collideWorldBounds = true;
    this.tank.body.bounce.setTo(1, 1);

    this.tank.angle = game.rnd.angle();
    this.points

    this.weapon = game.add.weapon(1, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 300;
    this.weapon.fireRate = 1000;
    this.weapon.trackSprite(this.turret, 0, 0, true);

    game.physics.arcade.velocityFromRotation(this.tank.rotation, 100, this.tank.body.velocity);
    var style = { font: "bold 12px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.playerName = game.add.text(this.tank.centerX, this.tank.centerY, "Player " + index, style);

};

EnemyTank.prototype.damage = function() {

    this.health -= 1;

    if (this.health <= 0) {
        this.alive = false;

        this.shadow.kill();
        this.tank.kill();
        this.turret.kill();
        this.playerName.kill();
        return true;
    }

    return false;

}

EnemyTank.prototype.update = function() {

    this.shadow.x = this.tank.x;
    this.shadow.y = this.tank.y;
    this.shadow.rotation = this.tank.rotation;

    this.turret.x = this.tank.x;
    this.turret.y = this.tank.y;
    this.turret.rotation = this.game.physics.arcade.angleBetween(this.tank, this.player.tank);
    this.playerName.x = this.tank.x - 8;
    this.playerName.y = this.tank.y - 40;
};


var PlayerTank = function(engine) {
    this.engine = engine;

    this.health = 10;
    //  The base of our tank
    this.tank = game.add.sprite(0, 0, 'tank', 'tank1');

    this.targetPos = { X: 0, Y: 0 };
    this.targetPos.x = game.rnd.between(50, game.width - 50);
    this.targetPos.y = game.rnd.between(50, game.height - 50);

    this.targetPts = [];
    //  This will force it to decelerate and limit its speed
    game.physics.enable(this.tank, Phaser.Physics.ARCADE);
    this.tank.anchor.setTo(0.5, 0.5);
    this.tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);
    this.tank.body.drag.set(0.2);
    this.tank.body.maxVelocity.setTo(40, 40);
    this.tank.body.collideWorldBounds = true;
    this.alive = true;

    this.targetAngle = 0;
    //  A shadow below our tank
    this.shadow = game.add.sprite(0, 0, 'tank', 'shadow');
    this.shadow.anchor.setTo(0.5, 0.5);

    //  Finally the turret that we place on-top of the tank body
    this.turret = game.add.sprite(0, 0, 'tank', 'turret');
    this.turret.anchor.setTo(0.3, 0.5);


    //  Our bullet group
    this.weapon = game.add.weapon(3, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
    this.weapon.bulletSpeed = 300;
    this.weapon.fireRate = 800;
    this.weapon.trackSprite(this.turret, 0, 0, true);
    var style = { font: "bold 12px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.playerName = game.add.text(this.tank.centerX, this.tank.centerY, "Joey", style);

    this.tankTween = game.add.tween(this.tank);

}

PlayerTank.prototype.update = function() {

    this.engine.currentSpeed = 150;

    if (this.engine.currentSpeed > 0) {
        game.physics.arcade.velocityFromRotation(this.tank.rotation, this.engine.currentSpeed, this.tank.body.velocity);
    }

    //  Position all the parts and align rotations
    this.shadow.x = this.tank.x;
    this.shadow.y = this.tank.y;
    this.shadow.rotation = this.tank.rotation;

    this.turret.x = this.tank.x;
    this.turret.y = this.tank.y;

    this.playerName.x = this.tank.x - 8;
    this.playerName.y = this.tank.y - 40;

    this.playerName.text = "Joey (" + this.health + ")";
    var angle = game.physics.arcade.angleBetween(this.tank, this.targetPos);
    if (this.tank.angle != parseFloat(angle).toFixed(2)){
        this.tank.angle += 0.01 ;
      
    }
    game.physics.arcade.velocityFromRotation(this.tank.rotation, this.engine.currentSpeed, this.tank.body.velocity);

    if (this.tank.position.distance(this.targetPos) < 2) {
        this.targetPos.x = game.rnd.between(50, game.width - 50);
        this.targetPos.y = game.rnd.between(50, game.height - 50);
    }


};

PlayerTank.prototype.damage = function() {

    //this.health -= 1;
    if (this.health <= 0) {
        this.alive = false;

        this.shadow.kill();
        this.tank.kill();
        this.turret.kill();
        return true;
    }

    return false;

};

PlayerTank.prototype.fire = function() {
    if (this.alive) {
        this.weapon.fire();
    }

};

PlayerTank.prototype.go = function(pos) {
    this.targetPts.push(pos);
};


PlayerTank.prototype.render = function() {
    //game.debug.spriteInfo(this.tank, 32, 32);
};

var State = {
    scene:{},
    init: function(scene) {
        this.land = null;

        this.shadow = null;
        this.player = null;
        this.turret = null;

        this.enemies = null;
        this.enemiesTotal = 0;
        this.enemiesAlive = 0;
        this.explosions = null;

        this.fireRate = 100;
        this.currentSpeed = 0;
        this.cursors = null;


    },

    preload: function() {
        game.load.baseURL = 'http://examples.phaser.io/';
        game.load.crossOrigin = 'anonymous';
        game.load.atlas('tank', 'assets/games/tanks/tanks.png', 'assets/games/tanks/tanks.json');
        game.load.atlas('enemy', 'assets/games/tanks/enemy-tanks.png', 'assets/games/tanks/tanks.json');
        game.load.image('logo', 'assets/games/tanks/logo.png');
        game.load.image('bullet', 'assets/games/tanks/bullet.png');
        game.load.image('earth', 'assets/games/tanks/scorched_earth.png');
        game.load.spritesheet('kaboom', 'assets/games/tanks/explosion.png', 64, 64, 23);

    },

    create: function() {

        //  Resize our game world to be a 2000 x 2000 square
        game.world.setBounds(-1000, -1000, 2000, 2000);

        //  Our tiled scrolling background
        this.land = game.add.tileSprite(0, 0, game.width, game.height, 'pack2', 'dirt.png');
        this.land.fixedToCamera = true;

        this.player = new PlayerTank(this);


        //  Create some baddies to waste :)
        this.enemies = [];

        this.enemiesTotal = 20;
        this.enemiesAlive = 20;

        for (var i = 0; i < this.enemiesTotal; i++) {
            this.enemies.push(new EnemyTank(i, game, this.player));
        }

        //  Explosion pool
        this.explosions = game.add.group();

        for (var j = 0; j < 10; j++) {
            var explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
            explosionAnimation.anchor.setTo(0.5, 0.5);
            explosionAnimation.animations.add('kaboom');
        }

        //this.player.tank.bringToTop();
        //this.player.turret.bringToTop();
        game.camera.follow(this.player.tank);
        game.camera.deadzone = new Phaser.Rectangle(0, 0, game.width, game.height);
        game.camera.focusOnXY(0, 0);

        this.cursors = game.input.keyboard.createCursorKeys();

    },

    update: function() {

        this.enemiesAlive = 0;

        for (var i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].alive) {
                game.physics.arcade.overlap(this.enemies[i].weapon.bullets, this.player.tank, this.bulletHitPlayer, null, this);
                this.enemiesAlive++;
                game.physics.arcade.collide(this.player.tank, this.enemies[i].tank);
                game.physics.arcade.overlap(this.player.weapon.bullets, this.enemies[i].tank, this.bulletHitEnemy, null, this);
                this.enemies[i].update();
                this.player.update();
                if (this.game.physics.arcade.distanceBetween(this.enemies[i].tank, this.player.tank) < 300) {
                    this.player.turret.rotation = this.game.physics.arcade.angleBetween(this.player.tank, this.enemies[i].tank); 
                    this.player.update();
                    this.enemies[i].weapon.fire();
                    this.player.fire();
                }
            }
        }
        this.land.tilePosition.x = -game.camera.x;
        this.land.tilePosition.y = -game.camera.y;

    },

    bulletHitPlayer: function(tank, bullet) {

        bullet.kill();
        var destroyed = this.player.damage();

        if (destroyed) {
            var explosionAnimation = this.explosions.getFirstExists(false);
            explosionAnimation.reset(tank.x, tank.y);
            explosionAnimation.play('kaboom', 30, false, true);
        }
    },

    bulletHitEnemy: function(tank, bullet) {

        bullet.kill();

        var destroyed = this.enemies[tank.name].damage();

        if (destroyed) {
            var explosionAnimation = this.explosions.getFirstExists(false);
            explosionAnimation.reset(tank.x, tank.y);
            explosionAnimation.play('kaboom', 30, false, true);
        }

    },

    render: function() {
        this.player.render();

        // game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.length, 32, 32);
        game.debug.text('Enemies: ' + this.enemiesAlive + ' / ' + this.enemiesTotal, 32, 32);

    }
}

game.state.add("default", State);
game.state.start('default');

var Scene  = State.scene;

Scene.create = function (){

}
