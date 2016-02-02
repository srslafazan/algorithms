// Write code to partition a linked list around a value x, such that all nodes less than x
// come before all nodes greater than or equal to x.

function partitionLinkedListAroundValue(x, sll){

	var current_node = sll.head;

	var l = new SinglyLinkedList();
	var r = new SinglyLinkedList();

	var current_list;
	var last_l_node;


	while (current_node.next){
		if(current_node.value < x){
			current_list = l;
		} else {
			current_list = r;
		}

		new_node = current_node;
		new_node.next = nil;
		l.addNode(new_node);

		if(current_list == l){
			last_l_node = new_node;
		}
	}

	last_l_node.next = r.head.next;
	r.head = null;
	
	return l;
}

