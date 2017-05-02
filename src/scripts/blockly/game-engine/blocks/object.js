goog.provide('Blockly.Blocks.object');

goog.require('Blockly.Blocks');

Blockly.Blocks.object.HUE = 280;

Blockly.Blocks['object_create_empty'] = {
    /**
     * Block for creating an empty object.
     * The 'object_create_with' block is preferred as it is more flexible.
     * <block type="object_create_with">
     *   <mutation items="0"></mutation>
     * </block>
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.OBJECT_CREATE_EMPTY_TITLE,
            "output": "{}",
            "colour": Blockly.Blocks.object.HUE,
            "tooltip": Blockly.Msg.OBJECT_CREATE_EMPTY_TOOLTIP,
            "helpUrl": Blockly.Msg.OBJECT_CREATE_EMPTY_HELPURL
        });
    }
};

Blockly.Blocks['object_create_with'] = {
    /**
     * Block for creating a object with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.OBJECT_CREATE_WITH_HELPURL);
        this.setColour(Blockly.Blocks.object.HUE);
        this.itemCount_ = 3;
        this.appendDummyInput('NAME')
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.OBJECT_CREATE_TITLE));

        this.updateShape_();
        this.setOutput(true, '{}');
        this.setMutator(new Blockly.Mutator(['object_create_with_item']));
        this.setTooltip(Blockly.Msg.OBJECT_CREATE_WITH_TOOLTIP);
    },
    /**
     * Create XML to represent object inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the object inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('object_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('object_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function() {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.OBJECT_CREATE_EMPTY_TITLE);
        }

        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                input.appendField(new Blockly.FieldTextInput("prop" + i));
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

Blockly.Blocks['object_create_with_container'] = {
    /**
     * Mutator block for object container.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(Blockly.Blocks.object.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.OBJECT_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.OBJECT_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['object_create_with_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(Blockly.Blocks.object.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.OBJECT_CREATE_WITH_ITEM_TITLE));

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.OBJECT_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

//Javascript

goog.provide('Blockly.JavaScript.object');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['object_create_empty'] = function(block) {
    // Create an empty list.
    return ['{}', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['object_create_with'] = function(block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    var object_name = block.getInput('NAME').fieldRow[0].getText();
    for (var i = 0; i < block.itemCount_; i++) {
        var prop_name = block.getInput('ADD' + i).fieldRow[0].getText();
        var value = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
            Blockly.JavaScript.ORDER_COMMA) || 'null';

        elements[i] = '"' + prop_name + '" : ' + value;

    }

    var code = ' {\n' + elements.join(', \n') + '\n}';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
