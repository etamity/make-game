(function(Realm) {
    const CATEGORY = 'Stage';
    const COLOUR = 30;
    var blocks = [{
        "type": "set_background_color",
        "message0": "set background color %1",
        "args0": [{
            "type": "input_value",
             "check": "Colour"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.stage.backgroundColor = @0;\n"
        }
    },{
        "type": "set_background",
        "message0": "set background %1",
        "args0": [ {
            "type": "input_value",
             "check": "IMAGE"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "(function(){var image = game.add.image(0, 0, @0);\n image.width = game.width;\n image.height = game.height;\n})(game);\n"
        }
    },{
        "type": "get_mouse_position",
        "message0": "get mouse position",
        "args0": [],
        "output": "POSITION",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.stage.getMousePosition()"
        }
    },{
        "type": "get_properties",
        "message0": "get stage %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
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
                ],
                [
                    "world alpha",
                    "worldAlpha"
                ],
                [
                    "alpha",
                    "alpha"
                ],
                [
                    "rotation",
                    "rotation"
                ]
            ]
        }],
        "tooltip": "",
        "output": "Number",
        "operator": true,
        "helpUrl": "",
        "languages": {
            "javaScript": "game.stage.@0"
        }
    },{
        "type": "get_game_properties",
        "message0": "get game %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "width",
                    "width"
                ],
                [
                    "height",
                    "height"
                ]
            ]
        }],
        "tooltip": "",
        "output": "Number",
        "operator": true,
        "helpUrl": "",
        "languages": {
            "javaScript": "game.@0"
        }
    }];

window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
