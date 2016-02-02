// How would you design a stack which, in addition to push and pop, also has a
// function min which returns the minimum element? Push, pop and min should all
// operate in 0(1) time.

function StackNode(value){
	this.value = value;
	this.min;
}

function Stack(){
	this.stack = [];

	this.min;

	this.push = function(value){
		var new_node = new StackNode(value);
		if( !this.min || value < this.min) {
			this.min = value;
			new_node.min = value;
		} else {
			new_node.min = this.min;
		}

		this.stack.push(new_node);
	}

	this.pop = function(){
		this.stack.shift();
		this.min = this.stack[0].min;
	}

}

var stack1 = new Stack();

stack1.push(4);
stack1.push(4);
stack1.push(3);
stack1.push(4);
stack1.push(3);
stack1.push(2);
stack1.push(1);

console.log(stack1);
console.log(stack1.min);
stack1.pop();
console.log(stack1.min);
stack1.pop();
console.log(stack1.min);