(function(Realm) {
    const CATEGORY = 'Event';
    const COLOUR = 330;
    var blocks = [{
        "type": "state",
        "message0": "on %1 %2 %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "create",
                    "create"
                ],
                [
                    "update",
                    "update"
                ],
                [
                    "render",
                    "render"
                ],
                [
                    "preload",
                    "preload"
                ]
            ]
        }, {
            "type": "input_dummy"
        }, {
            "type": "input_statement"
        }],
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "Scene.@0 = function (){\n @2 \n};\n"
        }
    }, {
        "type": "sprite_state",
        "message0": "sprite %1 on %2 %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "onOutOfBounds",
                    "onOutOfBounds"
                ],
                [
                    "onKilled",
                    "onKilled"
                ],
                [
                    "onRevived",
                    "onRevived"
                ],
                [
                    "onRemovedFromGroup",
                    "onRemovedFromGroup"
                ],
                [
                    "onInputUp",
                    "onInputUp"
                ],
                [
                    "onInputOver",
                    "onInputOver"
                ],
                [
                    "onInputOut",
                    "onInputOut"
                ],
                [
                    "onInputDown",
                    "onInputDown"
                ],
                [
                    "onEnterBounds",
                    "onEnterBounds"
                ],
                [
                    "onDragStop",
                    "onDragStop"
                ],
                [
                    "onDragStart",
                    "onDragStart"
                ],
                [
                    "onDestroy",
                    "onDestroy"
                ],
                [
                    "onAnimationStart",
                    "onAnimationStart"
                ],
                [
                    "onAnimationLoop",
                    "onAnimationLoop"
                ],
                [
                    "onAnimationComplete",
                    "onAnimationComplete"
                ],
                [
                    "onAddedToGroup",
                    "onAddedToGroup"
                ]
            ]
        }, {
            "type": "input_value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "previousStatement": null,
        "nextStatement": null,
        "languages": {
            "javaScript": "@0.events.@1.add(@2, this);\n"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
