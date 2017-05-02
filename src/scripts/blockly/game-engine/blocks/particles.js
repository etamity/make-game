(function(Realm) {
    const CATEGORY = 'Particles';
    const COLOUR = 330;
    var blocks = [{
        "type": "add_emitter",
        "message0": "add emitter x %1 y %2 max %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "PARTICLES",
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.add.emitter(@0, @1, @2)"
        }
    }, {
        "type": "make_praticles",
        "message0": "%1 make praticles %2 quantity %3 collide %4 collide world %5",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "IMAGE"
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 100
        }, {
            "type": "field_checkbox",
            "checked": false
        }, {
            "type": "field_checkbox",
            "checked": false
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.makeParticles(@1, @2, @3, @4);\n"
        }
    },{
        "type": "set_rotation",
        "message0": "emitter %1 rotation x %2 y %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.setRotation(@1, @2);\n"
        }
    },{
        "type": "set_alpha",
        "message0": "emitter %1 alpha min %2 max %3 rate %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
            "type": "input_value",
            "check": "Number",
            "value": 1
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 1
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
            "javaScript": "@0.setAlpha(@1, @2, @3);\n"
        }
    },{
        "type": "set_scale",
        "message0": "emitter %1 scale minX %2 maxX %3 minY %4 maxY %5 rate %6 ease %7 yoyo %8",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        },{
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
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "field_checkbox",
            "checked": false
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.setScale(@1, @2, @3, @4, @5, @6, @7);\n"
        }
    },{
        "type": "set_gravity",
        "message0": "emitter %1 gravity %2",
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
            "javaScript": "@0.gravity = @1;\n"
        }
    },{
        "type": "set_emitx",
        "message0": "emitter %1 emitX %2",
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
            "javaScript": "@0.emitX = @1;\n"
        }
    },{
        "type": "emit_start",
        "message0": "emitter %1 start explode %2 lifespan %3 frequency %4 quantity %5 forceQuantity %6",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_checkbox",
            "checked": false
        },{
            "type": "input_value",
            "check": "Number"
        },{
            "type": "input_value",
            "check": "Number"
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
            "javaScript": "@0.start(@1, @2, @3, @4, @5);\n"
        }
    },{
        "type": "set_properties",
        "message0": "emitter %1 set %2 x %3 y %4",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                [
                    "bounce",
                    "bounce"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "minParticleSpeed",
                    "minParticleSpeed"
                ],
                [
                    "maxParticleSpeed",
                    "maxParticleSpeed"
                ],
                [
                    "pivot",
                    "pivot"
                ],
                [
                    "particleDrag",
                    "particleDrag"
                ],
                [
                    "particleAnchor",
                    "particleAnchor"
                ],
                [
                    "scale",
                    "scale"
                ]
            ]
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
            "javaScript": "@0.@1.setTo(@2, @3);\n"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
