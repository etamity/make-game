(function(Realm) {
    const CATEGORY = 'Objects';
    const COLOUR = 130;
    var blocks = [{
        "type": "object",
        "message0": "object",
        "args0": [],
        "output": 'OBJECT',
        "tooltip": "",
        "helpUrl": "",
        "operator": true,
        "languages": {
            "javaScript": "{}"
        }
    },{
        "type": "statement_text",
        "message0": "statement %1",
        "args0": [{
            "type": "field_input"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0;\n"
        }
    },{
        "type": "point",
        "message0": "point x %1 y %2 %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_dummy"
        }],
        "output": 'POSITION',
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "(new Phaser.Point(@0, @1))"
        }
    },{
        "type": "set_properties",
        "message0": "%1 set %2 to %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_input",
            "name": "NAME",
            "text": "prop"
        }, {
            "type": "input_value"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1 = @2; \n"
        }
    },{
        "type": "get_properties",
        "message0": "%1 get %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "field_input",
            "name": "NAME",
            "text": "prop"
        }],
        "output": null,
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1"
        }
    },{
        "type": "get_properties_input",
        "message0": "%1 get %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Text"
        }],
        "output": null,
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0[@1]"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
