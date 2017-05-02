(function(Realm) {

    var BlocklyGenerator = {
        blocks: [],
        addBlocks: function(category, arr, colour, xmlonly) {
            var blocks = !xmlonly ? arr.map(item => {
                item.id = (category + '_' + item.type).toLowerCase();
                item.colour = colour;
                return this.generateBlock(item.id, item);
            }) : arr.map(item => {
                item.id = (category + '_' + item.type).toLowerCase();
                item.colour = colour;
                return item;
            });

            var category_index = null;
            this.blocks.forEach((categoryItem, index) =>{
                if (categoryItem.name === category)
                {
                    category_index = index;
                }
            })
            if (category_index) {
                this.blocks[category_index].blocks = this.blocks[category_index].blocks.concat(blocks);
            } else {
                var item = { name: category, colour: colour, blocks: blocks };
                this.blocks.push(item);
            }

        },

        generateBlock: function(name, json) {
            var getShadowXML = function(blockType, name , value) {
                if (!blockType) {
                    return;
                }
                xml = '';
                switch (blockType) {
                    case 'Number':
                        xml = '<value name="' + name + '"><shadow type="math_number"><field name="NUM">' + value + '</field></shadow></value>';
                        break;
                    case 'String':
                        xml = '<value name="' + name + '"><shadow type="text"><field name="TEXT">' + value + '</field></shadow></value>';
                        break;
                    case 'POSITION':
                        xml = '<value name="' + name + '"><shadow type="ojbect_point"><value name="@0"><shadow type="math_number" id="4,LWTIXe7hs,bJQ6iO$["><field name="NUM">0</field></shadow></value><value name="@1"><shadow type="math_number" id="*V6_|U]ujA(5B|6[zBK+"><field name="NUM">0</field></shadow></value></shadow></value>';
                        break;
                    case 'IMAGE':
                        xml = '<value name="' + name + '"><shadow type="asset_tile"><field name="NAME">complete</field><field name="IMAGE">0</field></shadow></value>';
                        break;
                    case 'Colour':
                        xml = '<value name="' + name + '"><shadow type="colour_picker" id="vNNT24})ZYihkWk1*][C"><field name="COLOUR">#ffffff</field></shadow></value>';
                        break;
                    case 'SPRITE':
                    	xml = '<value name="' + name + '"><shadow type="sprite_add" id="|vaU]Jx,MDcc3Z*:(CW0"><value name="@0"><shadow type="asset_tile" id="LR:R-UI@z}lsIXS/!TnM"><field name="NAME">complete</field><field name="IMAGE">0</field></shadow></value><value name="@1"><shadow type="math_number" id="TaFv0%JF1}3B5Q}DDyBi"><field name="NUM">0</field></shadow></value><value name="@2"><shadow type="math_number" id="IqsmSsD4Eir{M@SN7qTt"><field name="NUM">0</field></shadow></value></shadow></value>'
                    	break;
                }
                return xml;
            }
            var getBlockValue = function(block, type, name) {
                var value = '';
                switch (type) {
                    case 'field_variable':
                        value = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(name), Blockly.Variables.NAME_TYPE) || null;
                        break;
                    case 'input_value':
                        value = Blockly.JavaScript.valueToCode(block, name, Blockly.JavaScript.ORDER_ATOMIC) || null;
                        break;
                    case 'field_input':
                    case 'field_dropdown':
                    case 'field_number':
                    case 'field_angle':
                    case 'field_colour':
                        value = block.getFieldValue(name) || null;
                        break;
                    case 'input_statement':
                        value = Blockly.JavaScript.statementToCode(block, name) || null;
                        break;
                    case 'field_checkbox':
                        value = block.getFieldValue(name) == 'TRUE';
                        break;
                }
                return value;
            }
            var block_name = name;
            var args = json.args0;
            args.forEach((field, i) => {
                field.name = '@' + i;
                field.shadow = getShadowXML(field.check, field.name, field.value || 0);
            });
            Blockly.Blocks[block_name] = {
                init: function() {
                    this.jsonInit(json);
                }
            };
            Blockly.JavaScript[block_name] = typeof(json.languages.javaScript) === 'function' ? json.languages.javaScript : function(block) {
                var code = json.languages.javaScript;
                args.forEach((item) => {
                    code = code.replace(new RegExp(item.name, 'g'), getBlockValue(block, item.type, item.name));
                });
                if  ("operator" in json) {
                    code = [code];
                }

                return code;
            };
            json.args0 = args;
            return json;

        }
    };

    window.Realm.Game = window.Realm.Game || {};
    window.Realm.Game.Blockly = BlocklyGenerator;

})(window.Realm = window.Realm || {});
