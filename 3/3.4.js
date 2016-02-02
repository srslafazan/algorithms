// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of
// different sizes which can slide onto any tower. The puzzle starts with disks sorted
// in ascending order of size from top to bottom (i.e., each disk sits on top of an even
// larger one). You have the following constraints:
// (T) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto the next rod.
// (3) A disk can only be placed on top of a larger disk.
// Write a program to move the disks from the first tower to the last using Stacks.


function TowersOfHanoiWithStacks(){

	this.tower0 = new Tower([1,2,3,4,5]);
	this.tower1 = new Tower();
	this.tower2 = new Tower();

	this.moveNumberOfDiscs = function(n, origin_tower, buffer_tower, destination_tower){
		
		if (n <= 0) return;

		this.moveNumberOfDiscs(n-1, origin_tower, destination_tower, buffer_tower);
		this.moveTopDisc(origin_tower, destination_tower);
		this.moveNumberOfDiscs(n-1, buffer_tower, destination_tower, origin_tower);
	};

	// TODO: implement moveTopDisc function
	this.moveTopDisc = function(origin_tower, destination_tower){
		console.log("Move disc" + origin_tower.stack[0] + " from " + origin_tower.name + " to " + destination_tower.name);
		destination_tower.push(origin_tower.pop());
	};
}

function Tower(stack){
	if (!stack){
		this.stack = [0,0,0,0,0];
	} else {
		this.stack = stack;
	}

	this.push = function(value){
		this.stack.unshift(value);
	};
	this.pop = function(){
		this.stack.shift();
	};

}


var game1 = new TowersOfHanoiWithStacks();
game1.moveNumberOfDiscs(5, game1.tower0,game1.tower2,game1.tower1);