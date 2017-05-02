  var blocks = [{
    	"category": "test",
    	"block":"change",
	  	"message0": "change %1 by %2",
	  	"args0": [
	    	{"type": "field_variable", "variable": "item"},
	    	{"type": "input_value", "check": "Number"}
	  	],
	  	"previousStatement": null,
	  	"nextStatement": null,
	  	"colour": 230
}];
    blocks[0].args0.forEach( (block, i ) => {
    			block.name = 'VAL' + i;block
  
            });

             		console.log(blocks[0].args0);