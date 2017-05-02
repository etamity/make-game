(function(Realm) {
    const CATEGORY = 'Physics';
    const COLOUR = 230;
    var blocks = [{
        "type": "new_weapon",
        "message0": "weapon bullets %1 %2",
        "args0": [{
            "type": "input_value",
            "value": 30,
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "IMAGE"
        },{
            "type": "input_dummy"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "game.add.weapon(@0, @1)"
        }
    },{
        "type": "weapon_kill_type",
        "message0": "weapon %1 kill type %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_dropdown",
            "options": [
                [
                    "Phaser.Weapon.KILL_NEVER",
                    "Phaser.Weapon.KILL_NEVER"
                ],
                [
                    "Phaser.Weapon.KILL_LIFESPAN",
                    "Phaser.Weapon.KILL_LIFESPAN"
                ],
                [
                    "Phaser.Weapon.KILL_DISTANCE",
                    "Phaser.Weapon.KILL_DISTANCE"
                ],
                [
                    "Phaser.Weapon.KILL_WEAPON_BOUNDS",
                    "Phaser.Weapon.KILL_WEAPON_BOUNDS"
                ],
                [
                    "Phaser.Weapon.KILL_CAMERA_BOUNDS",
                    "Phaser.Weapon.KILL_CAMERA_BOUNDS"
                ],
                [
                    "Phaser.Weapon.KILL_WORLD_BOUNDS",
                    "Phaser.Weapon.KILL_WORLD_BOUNDS"
                ],
                [
                    "Phaser.Weapon.KILL_STATIC_BOUNDS",
                    "Phaser.Weapon.KILL_STATIC_BOUNDS"
                ]
            ]
        }, {
            "type": "input_value",
            "check": "IMAGE"
        },{
            "type": "input_dummy"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.bulletKillType = @1; \n"
        }
    },{
        "type": "weapon_set_properties",
        "message0": "weapon %1 set %2 to %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_dropdown",
            "options": [
                [
                    "bulletGravity",
                    "bulletGravity"
                ],
                [
                    "bulletSpeed",
                    "bulletSpeed"
                ],
                [
                    "fireRate",
                    "fireRate"
                ],
                [
                    "fireLimit",
                    "fireLimit"
                ],
                [
                    "fireRateVariance",
                    "fireRateVariance"
                ],
                [
                    "bulletAngleVariance",
                    "bulletAngleVariance"
                ],
                [
                    "bulletSpeedVariance",
                    "bulletSpeedVariance"
                ],
                [
                    "bulletKillDistance",
                    "bulletKillDistance"
                ],
                [
                    "bulletLifespan",
                    "bulletLifespan"
                ],
                [
                    "bulletAngleOffset",
                    "bulletAngleOffset"
                ],
                [
                    "bulletWorldWrapPadding",
                    "bulletWorldWrapPadding"
                ]
            ]
        }, {
            "type": "input_value",
            "check": "Number"
        },{
            "type": "input_value",
            "value": 0,
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1 = @2;\n"
        }
    },{
        "type": "new_group",
        "message0": "new physics group",
        "args0": [{
            "type": "input_dummy"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "game.add.physicsGroup()"
        }
    }, {
        "type": "start_system",
        "message0": "use physics %1",
        "args0": [{
            "type": "field_dropdown",
            "options": [
                [
                    "Arcade",
                    "Phaser.Physics.Arcade"
                ],
                [
                    "P2JS",
                    "Phaser.Physics.P2JS"
                ],
                [
                    "NINJA",
                    "Phaser.Physics.NINJA"
                ],
                [
                    "BOX2D",
                    "Phaser.Physics.BOX2D"
                ]
            ]
        }],
        "tooltip": "",
        "helpUrl": "",
        "previousStatement": null,
        "nextStatement": null,
        "languages": {
            "javaScript": "game.physics.startSystem(@0);\n"
        }
    }, {
        "type": "enable",
        "message0": "enable physics %1",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.physics.enable(@0);\n"
        }
    }, {
        "type": "body_immovable",
        "message0": "%1 immovable %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.body.immovable = @1;\n"
        }
    }, {
        "type": "collide_worldbounds",
        "message0": "%1 collide worldbounds %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.body.collideWorldBounds = @1;\n"
        }
    }, {
        "type": "body_set_properties",
        "message0": "%1 %2 set %3 to %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "gravity",
                    "gravity"
                ],
                [
                    "velocity",
                    "velocity"
                ],
                [
                    "bounce",
                    "bounce"
                ],
                [
                    "acceleration",
                    "acceleration"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "deltaMax",
                    "deltaMax"
                ],
                [
                    "drag",
                    "drag"
                ],
                [
                    "maxVelocity",
                    "maxVelocity"
                ],
                [
                    "newVelocity",
                    "newVelocity"
                ],
                [
                    "offset",
                    "offset"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "prev",
                    "prev"
                ],
                [
                    "tilePadding",
                    "tilePadding"
                ]
            ]
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "x",
                    "x"
                ],
                [
                    "y",
                    "y"
                ]
            ]
        }, {
            "type": "input_value",
            "value": null,
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.body.@1.@2 = @3;\n"
        }
    }, {
        "type": "body_get_properties",
        "message0": "%1 %2 get %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "gravity",
                    "gravity"
                ],
                [
                    "velocity",
                    "velocity"
                ],
                [
                    "bounce",
                    "bounce"
                ],
                [
                    "acceleration",
                    "acceleration"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "deltaMax",
                    "deltaMax"
                ],
                [
                    "drag",
                    "drag"
                ],
                [
                    "maxVelocity",
                    "maxVelocity"
                ],
                [
                    "newVelocity",
                    "newVelocity"
                ],
                [
                    "offset",
                    "offset"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "prev",
                    "prev"
                ],
                [
                    "tilePadding",
                    "tilePadding"
                ]
            ]
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "x",
                    "x"
                ],
                [
                    "y",
                    "y"
                ]
            ]
        }],
        "output": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.body.@1.@2"
        }
    }, {
        "type": "body_set_value",
        "message0": "%1 set %2 to %3 %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "gravity",
                    "gravity"
                ],
                [
                    "velocity",
                    "velocity"
                ],
                [
                    "bounce",
                    "bounce"
                ],
                [
                    "acceleration",
                    "acceleration"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "deltaMax",
                    "deltaMax"
                ],
                [
                    "drag",
                    "drag"
                ],
                [
                    "maxVelocity",
                    "maxVelocity"
                ],
                [
                    "newVelocity",
                    "newVelocity"
                ],
                [
                    "offset",
                    "offset"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "prev",
                    "prev"
                ],
                [
                    "tilePadding",
                    "tilePadding"
                ]
            ]
        }, {
            "type": "input_value",
            "value": null,
            "check": "Number"
        }, {
            "type": "input_value",
            "value": null,
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.body.@1.set(@2, @3);\n"
        }
    }, {
        "type": "collide_handler",
        "message0": "object %1 collide %2 then %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "function"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.physics.arcade.collide(@0, @1, @2);\n"
        }
    }, {
        "type": "check_bounds",
        "message0": "check bounds %1 %2",
        "args0": [{
            "type": "field_dropdown",
            "options": [
                [
                    "up",
                    "up"
                ],
                [
                    "down",
                    "down"
                ],
                [
                    "left",
                    "left"
                ],
                [
                    "right",
                    "right"
                ]
            ]
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "tooltip": "",
        "helpUrl": "",
        "previousStatement": null,
        "nextStatement": null,
        "languages": {
            "javaScript": "game.physics.arcade.checkCollision.@0 = @1;\n"
        }
    }, {
        "type": "group_set_all_bool_properties",
        "message0": "group %1 set %2 to %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [   "collideWorldBounds",
                    "collideWorldBounds"
                ],
                [
                    "visible",
                    "visible"
                ],
                [
                    "worldVisible",
                    "worldVisible"
                ],
                [
                    "alive",
                    "alive"
                ],
                [
                    "smoothed",
                    "smoothed"
                ],
                [
                    "checkWorldBounds",
                    "checkWorldBounds"
                ],
                [
                    "cacheAsBitmap",
                    "cacheAsBitmap"
                ],
                [
                    "buttonMode",
                    "buttonMode"
                ],
                [
                    "autoCull",
                    "autoCull"
                ],
                [
                    "renderable",
                    "renderable"
                ],
                [
                    "outOfBoundsKill",
                    "outOfBoundsKill"
                ],
                [
                    "interactive",
                    "interactive"
                ],
                [
                    "inputEnabled",
                    "inputEnabled"
                ],
                [
                    "fixedToCamera",
                    "fixedToCamera"
                ],
                [
                    "exists",
                    "exists"
                ]
            ]
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.setAll('body.@1', @2);\n"
        }
    },{
        "type": "body_set_all_value_properties",
        "message0": "group %1 set %2 to %3 %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "gravity",
                    "gravity"
                ],
                [
                    "velocity",
                    "velocity"
                ],
                [
                    "bounce",
                    "bounce"
                ],
                [
                    "acceleration",
                    "acceleration"
                ],
                [
                    "center",
                    "center"
                ],
                [
                    "deltaMax",
                    "deltaMax"
                ],
                [
                    "drag",
                    "drag"
                ],
                [
                    "maxVelocity",
                    "maxVelocity"
                ],
                [
                    "newVelocity",
                    "newVelocity"
                ],
                [
                    "offset",
                    "offset"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "prev",
                    "prev"
                ],
                [
                    "tilePadding",
                    "tilePadding"
                ]
            ]
        }, {
            "type": "input_value",
            "value": null,
            "check": "Number"
        }, {
            "type": "input_value",
            "value": null,
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.setAll('body.@1', new Phaser.Point(@2, @3));\n"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
