// Describe how you could use a single array to implement three stacks.

function TripleStack(n){
	this.stacks = new Array(n);
	this.length = this.stacks.length;

	this.front_stack_indices = {
		first: 0, 
		last: parseInt(n/3 - 1)
	};

	this.middle_stack_indices = {
		first: parseInt(n/3), 
		last: parseInt(2*n/3 - 1)
	};

	this.back_stack_indices = {
		first: parseInt(2*n/3), 
		last: n-1
	};

	this.addValueToStack = function(stack, value){
		var runner = this.setStackIndex(stack);
		// var runner = this.front_stack_indices['last'];
		while(runner >= 0 && this.stacks[runner] != null && this.stacks[runner] != undefined){
			runner--;
		}
		if( runner < 0 ) {
			// TODO : ran out of space in front stack, so re-balance/re-appropriate space
		} else {
			this.stacks[runner] = value;
		}
		console.log(this.stacks);
	};

	this.popValueFromStack = function(){
	};

	this.setStackIndex = function(stack){
		switch(stack){
			case "Front":
				return this.front_stack_indices.last;
			break;
			case "Middle":
				return this.middle_stack_indices.last;
			break;
			case "Back":
				return this.back_stack_indices.last;
			break;
			default:
				return this.front_stack_indices.last;
		}
	};

}



var stack1 = new TripleStack(15);
stack1.addValueToStack("Front", 1);
stack1.addValueToStack("Front", 2);
stack1.addValueToStack("Front", 3);
stack1.addValueToStack("Front", 4);
stack1.addValueToStack("Front", 5);

stack1.addValueToStack("Middle", 1);
stack1.addValueToStack("Middle", 2);
stack1.addValueToStack("Middle", 3);
stack1.addValueToStack("Middle", 4);
stack1.addValueToStack("Middle", 5);

stack1.addValueToStack("Back", 1);
stack1.addValueToStack("Back", 2);
stack1.addValueToStack("Back", 3);
stack1.addValueToStack("Back", 4);
stack1.addValueToStack("Back", 5);

console.log(stack1);