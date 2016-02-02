// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
// necessarily a binary search tree.

// set properties of one and two in each node on the way down, 
// look for both node_one and node_two
// store last_node
// if both calls finish and:  ! ( one && two ) return last_node

// if tree is binary search
function findFirstCommonAncestor(runner, first_value, second_value, last_ancestor){
	if (!last_ancestor){
		last_ancestor = runner;
	}
	var direction_first = directionOfValue(runner, first_value),
		direction_second = directionOfValue(runner, second_value);
	if ( direction_first == "this" || direction_second == "this" ) {
		return runner;
	}
	else if ( direction_first == "value not found" || direction_second == "value not found" ){
		return false;
	}
	else if ( direction_first != direction_second ){
		return last_ancestor;
	} else {
		runner = runner[direction_first];
		findFirstCommonAncestor(runner, first_node, second_node, last_ancestor);
	}
}

function directionOfValue(runner, value){
	if ( value < runner.value ){ // value is less
		if ( runner.left ) {
			return "left";
		} else {
			// value doesn't exist in tree
			return "value not found";
		}
	} else if ( value > runner.value ) { // value is greater
		if ( runner.right ) {
			return "right";
		} else {
			// value doesn't exist in tree
			return "value not found";
		}
	} else { // value is the same
		return "this";
	}
}