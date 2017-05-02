(function(Realm) {
    const CATEGORY = 'Input';
    const COLOUR = 80;
    var blocks = [{
        "type": "key_pressed",
        "message0": "check %1 key pressed",
        "args0": [{
            "type": "field_dropdown",
            "options": [
                [
                    "up",
                    "Phaser.Keyboard.UP"
                ],
                [
                    "down",
                    "Phaser.Keyboard.DOWN"
                ],
                [
                    "left",
                    "Phaser.Keyboard.LEFT"
                ],
                [
                    "right",
                    "Phaser.Keyboard.RIGHT"
                ],
                [
                    "space",
                    "Phaser.Keyboard.SPACEBAR"
                ],
                [
                    "Z",
                    "Phaser.Keyboard.Z"
                ]
            ]
        }],
        "output": null,
        "tooltip": "",
        "operator": true,
        "helpUrl": "",
        "languages": {
            "javaScript": "game.input.keyboard.isDown(@0)"
        }
    }, {
        "type": "reset",
        "message0": "reset input %1",
        "args0": [{
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.input.reset(@0);\n"
        }
    }, {
        "type": "cursor_position",
        "message0": "get cursor %1",
        "args0": [{
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
        "operator": true,
        "languages": {
            "javaScript": "game.input.@0"
        }
    }, {
        "type": "on_event_add",
        "message0": "input event %1 add %2",
        "args0": [{
            "type": "field_dropdown",
            "options": [
                [
                    "onUp",
                    "onUp"
                ],
                [
                    "onDown",
                    "onDown"
                ],
                [
                    "onTap",
                    "onTap"
                ],
                [
                    "onHold",
                    "onHold"
                ]
            ]
        }, {
            "type": "input_value",
            "check": "function"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.input.@0.add(@1, this);\n"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
