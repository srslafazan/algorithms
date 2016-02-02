// Implement an algorithm to delete a node in the middle of a singly linked list, given
// only access to that node.

// Questions: 1) does each node contain a unique value?



function deleteNodeInSll(remove_node, sll){
	var previous_node = findPreviousNodeFromValue(remove_node.value);

	removeNodeWithPreviousNode(previous_node, remove_node);

	return true;
}

function findPreviousNodeFromValue(remove_value, sll){
	var runner = sll.head;

	while ( runner.next.value != remove_value ) {
		runner = runner.next;
	}
	if(runner.value == remove_value){
		return runner;
	} else {
		return false;
	}
}
function removeNodeWithPreviousNode(previous_node, remove_node, sll){
	previous_node.next = remove_node.next;
	remove_node = null;

}

deleteNodeInSll(remove_node);