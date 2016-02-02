// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
// in real life, we would likely start a new stack when the previous stack exceeds some
// threshold. Implement a data structure SetOfStacks that mimics this. SetOf-
// Stacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.
// pop () should behave identically to a single stack (that is, pop () should return the
// same values as it would if there were just a single stack).

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a
// specific sub-stack.


function SetOfStacks(max_stack_capacity){
	this.stacks = [];
	this.max_stack_capacity = max_stack_capacity;

	this.push = function(value){

		// handle stack splits

		return this.stacks[0].unshift(value);
	};	
	this.pop = function(){

		// handle stack reductions

		return this.stacks[0].shift();
	};	

	this.split = function(){
	};

	this.reduce = function(){
	}

	this.popAtIndex = function(i){
	};

}



