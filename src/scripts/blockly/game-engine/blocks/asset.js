(function(Realm) {
    const CATEGORY = 'Asset';
    const COLOUR = 130;

    var blocksRaw = [{
        "type": "tile",
        "message0": "%1 %2",
        "args0": [{
            "type": "input_dummy"
        }, {
            "type": "field_image",
            "width": 32,
            "height": 32,
            "alt": "1"
        }],
        "output": "IMAGE",
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@1, @0"
        }
    }];

    var getSoundKeys = function() {
        var game = window.Realm.Game.Storage.getVariable('game');
        var keys = game ? game.cache.getKeys(Phaser.Cache.SOUND) : [];
        var defaultKey = keys.length > 0 ? keys[0] : '';
        keys = keys.map(key => {
            return [key, key];
        });
        return keys;
    };

    var blocks = [{
        "type": "audio_add",
        "message0": "add audio %1 ",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": getSoundKeys
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "field_checkbox",
            "checked": false
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "output": "AUDIO",
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.add.audio('@0')"
        }
    }, {
        "type": "audio_add_sprite",
        "message0": "audio add sprite %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "NAME",
            "options": getSoundKeys
        }],
        "output": "AUDIO",
        "operator": true,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.add.audioSprite('@0')"
        }
    }, {
        "type": "audio_play",
        "message0": "play %1 volume %2 loop %3",
        "args0": [{
            "type": "field_dropdown",
            "options": getSoundKeys
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 1
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.sound.play('@0', @1, @2);\n"
        }
    }, {
        "type": "audio_sprite_play",
        "message0": "%1 play volume %2 loop %3",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "input_value",
            "check": "Number",
            "value": 1
        }, {
            "type": "field_checkbox",
            "checked": true
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.play('', 0, @1, @2);\n"
        }
    }, {
        "type": "audio_sprite_action",
        "message0": "%1 action %2",
        "args0": [{
            "type": "field_variable",
            "variable": "item"
        }, {
            "type": "field_dropdown",
            "options": [
                ['pause', 'pause'],
                ['stop', 'stop'],
                ['play', 'play'],
                ['resume', 'resume'],
                ['restart', 'restart'],
                ['fadeTo', 'fadeTo'],
                ['fadeOut', 'fadeOut'],
                ['fadeIn', 'fadeIn']
            ]
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "@0.@1();\n"
        }
    }]

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocksRaw, COLOUR, true);
    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);


    var buildAudioAdd = function(blockName) {
        Blockly.Blocks[blockName] = {
            init: function() {
                var game = window.Realm.Game.Storage.getVariable('game');
                var keys = game ? game.cache.getKeys(Phaser.Cache.SOUND) : [];
                var defaultKey = keys.length > 0 ? keys[0] : '';
                keys = keys.map(key => {
                    return [key, key];
                });
                this.appendDummyInput()
                    .appendField("audio add")
                    .appendField(new Blockly.FieldDropdown(keys), "NAME")
                    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
                this.setOutput(true, "IMAGE");
                this.setTooltip('');
                this.setHelpUrl('');
                this.setColour(COLOUR);
                this.getField('NAME').setText(defaultKey);
            }
        };
        Blockly.JavaScript[blockName] = function(block) {
            var dropdown_name = block.getFieldValue('NAME');
            // TODO: Assemble JavaScript into code variable.
            var code = 'game.add.audio(' + dropdown_name + ')';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code];
        };
    }

    var buildTileBlock = function(blockName) {
        Blockly.Blocks[blockName] = {
            init: function() {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTexture(this.container), 'IMAGE')
                    .appendField('0', 'INDEX');

                this.getField('IMAGE').EDITABLE = true;
                this.getField('IMAGE').onItemChanged = this.onItemChanged.bind(this);
                //this.getField('NAME').onItemSelected = this.onOptionChanged.bind(this);
                this.setOutput(true, 'IMAGE');
                this.setColour(COLOUR);
            },
            getKey: function() {
                var value = JSON.parse(block.getField('IMAGE').getValue());
                return value.key || '';
            },
            getIndex: function() {
                var value = JSON.parse(block.getField('IMAGE').getValue());
                return value.index || '';
            },
            onItemChanged: function(value) {
                this.getField('INDEX').setValue(value.index);
            }
        };

        Blockly.JavaScript[blockName] = function(block) {
            var value = JSON.parse(block.getField('IMAGE').getValue());
            var index = value.index || 0;
            var key = value.key;
            var code = '"' + key + '", ' + index; //'{index:' + imageIndex + ', key:"' + key +'"}';
            return [code];
        };
    }

    blocksRaw.forEach(block => {
        var blockName = (CATEGORY + '_' + block.type).toLowerCase();
        switch (block.type) {
            case 'tile':
                buildTileBlock(blockName);
                break;
                // case 'audio_add':
                //     buildAudioAdd(blockName);
                // break;
        }
    })


})(window.Realm = window.Realm || {});
