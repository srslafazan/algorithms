// Implement an algorithm to find the kth to last element of a singly linked list.

// questions: 1) is it circular?

var k = 3;
var sll = new SinglyLinkedList();

function findKthToLastElement(k, sll){

	// find length l of sll
	var l = returnLengthOfSll(sll);

	var current_node = sll.head;
	for ( var i = 0 ; i < l - k ; i++){
		current_node = current_node.next;
	}
	return current_node;
}

findKthToLastElement(k, sll);


function betterFindKthToLastElement(k, sll){

	var i = 0;

	var current_node = sll.head;
	var kth_node = this.head;

	while( i < k ){
		current_node = current_node.next;
		i++;
	}

	while(current_node.next){
		current_node = current_node.next;
		kth_node = kth_node.next;
	}

	return kth_node;
}