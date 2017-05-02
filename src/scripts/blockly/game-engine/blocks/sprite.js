(function(Realm) {
    const CATEGORY = 'Sprite';
    const COLOUR = 130;
    var blocks = [{
        "type": "add",
        "message0": "sprite %1 x %2 y %3",
        "args0": [{
            "type": "input_value",
            "check": "IMAGE"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "game.add.sprite(@1, @2, @0)"

            // function(block){
            //     var image = Blockly.JavaScript.valueToCode(block, '@0', Blockly.JavaScript.ORDER_ATOMIC);
            //     var pos = Blockly.JavaScript.valueToCode(block, '@1', Blockly.JavaScript.ORDER_ATOMIC);
            //     image = eval(image);
            //     console.log(image);
            //     var code = `game.add.sprite(${pos.x}, ${pos.y}, ${image.key}, ${image.index})`;
            //     return [code];
            // }
        }
    }, {
        "type": "tile_add",
        "message0": "tile sprite %1 x %2 y %3 width %4 height %5",
        "args0": [{
            "type": "input_value",
            "check": "IMAGE"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": 'SPRITE',
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.add.tileSprite(@1, @2, @3, @4, @0)"
        }
    }, {
        "type": "new_sprite_batch",
        "message0": "new sprite batch",
        "args0": [{
            "type": "input_dummy"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "game.add.spriteBatch()"
        }
    }, {
        "type": "make_sprite",
        "message0": "sprite %1 x %2 y %3",
        "args0": [{
            "type": "input_value",
            "check": "IMAGE"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.make.sprite(@1, @2, @0)"
        }
    },{
        "type": "add_child",
        "message0": "%1 add child %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_variable",
            "variable": "item"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.addChild(@1);\n"
        }
    },{
        "type": "add_child_at",
        "message0": "%1 add child %2 at %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.addChildAt(@1, @2);\n"
        }
    },{
        "type": "remove_child",
        "message0": "%1 remove child %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_variable",
            "variable": "item"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.removeChild(@1);\n"
        }
    },{
        "type": "remove_child_at",
        "message0": "%1 remove child at %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.removeChildAt(@2);\n"
        }
    },{
        "type": "remove_children",
        "message0": "%1 remove children from %2 to %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Number"
        },{
            "type": "input_value",
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.removeChildren(@2, @3);\n"
        }
    }, {
        "type": "group_add",
        "message0": "group %1 add %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "SPRITE"
        }],
        "output": 'SPRITE',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "@0.add(@1)"
        }
    }, {
        "type": "group_all_immovable",
        "message0": "group %1 all immovable %2",
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
            "javaScript": "@0.setAll('body.immovable', @1);\n"
        }
    }, {
        "type": "get_properties",
        "message0": "sprite %1 get %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
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
                ],
                [
                    "z",
                    "z"
                ],
                [
                    "health",
                    "health"
                ],
                [
                    "worldAlpha",
                    "worldAlpha"
                ],
                [
                    "width",
                    "width"
                ],
                [
                    "height",
                    "height"
                ],
                [
                    "tint",
                    "tint"
                ],
                [
                    "rotation",
                    "rotation"
                ],
                [
                    "lifespan",
                    "lifespan"
                ],
                [
                    "frame",
                    "frame"
                ]
            ]
        }],
        "output": 'Number',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "@0.@1"
        }
    }, {
        "type": "set_size_width_height",
        "message0": "sprite %1 set width %2 height %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        },{
            "type": "input_value",
            "check": "Number",
            "value": 0
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.width = @1;\n @0.height = @2;\n"
        }
    },{
        "type": "set_position_size_x_y",
        "message0": "sprite %1 set %2 to %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
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
                ],
                [
                    "width",
                    "width"
                ],
                [
                    "height",
                    "height"
                ]
            ]
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1 = @2;\n"
        }
    },{
        "type": "set_position_xy",
        "message0": "sprite set position to %1 x %2 y %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.position.set(@1, @2);\n"
        }
    }, {
        "type": "set_properties_xy",
        "message0": "sprite set %1 to %2 x %3 y %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "position",
                    "position"
                ],
                [
                    "anchor",
                    "anchor"
                ],
                [
                    "scale",
                    "scale"
                ],
                [
                    "pivot",
                    "pivot"
                ],
                [
                    "cameraOffset",
                    "cameraOffset"
                ]
            ]
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1.set(@2, @3);\n"
        }
    },{
        "type": "set_properties_bool",
        "message0": "sprite %1 set %2 true %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
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
            "javaScript": "@0.@1 = @2;\n"
        }
    },{
        "type": "get_properties_bool",
        "message0": "sprite %1 get %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
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
                    "inWorld",
                    "inWorld"
                ],
                [
                    "inCamera",
                    "inCamera"
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
        }],
        "output" : "Boolean",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1"
        }
    },{
        "type": "reset",
        "message0": "reset %1 x %2 y %3 health %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 0
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.reset(@1, @2, @3);\n"
        }
    }, {
        "type": "kill",
        "message0": "kill %1 sprite",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.kill();\n"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
