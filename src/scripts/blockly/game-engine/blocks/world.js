(function(Realm) {
    const CATEGORY = 'World';
    const COLOUR = 200;
    var blocks = [{
        "type": "set_bounds",
        "message0": "set world x %1 y%2 width %3 height %4",
        "args0": [{
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
        "tooltip": "",
        "previousStatement": null,
        "nextStatement": null,
        "helpUrl": "",
        "languages": {
            "javaScript": "game.world.setBounds(@0, @1, @3, @4); \n"
        }
    }, {
        "type": "get_properties",
        "message0": "get world %1",
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
                    "centerX",
                    "centerX"
                ],
                [
                    "centerY",
                    "centerY"
                ],
                [
                    "z",
                    "z"
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
                    "alpha",
                    "worldAlpha"
                ],
                [
                    "total",
                    "total"
                ],
                [
                    "rotation",
                    "rotation"
                ]
            ]
        }],
        "operator": true,
        "tooltip": "",
        "output": "Number",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.world.@0"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
