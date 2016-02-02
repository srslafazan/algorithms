// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP:
	// How would you solve this problem if a temporary buffer is not allowed?

function Node (value){
	this.value = value;
	this.next;
}

function SinglyLinkedList(){
	this.head = new Node("head");
	this.addNode = function(value){
		this.returnTailNode().next = new Node(value);
	}
	this.returnTailNode = function() {
		var current_node = this.head;
		while(current_node.next){
			current_node = current_node.next;
		}
		return current_node;
	}
	this.returnPreviousNodeofNodeWithValue = function(value){
		var current_node = this.head;
		while(current_node.next){
			if(current_node.next.value == value){
				return current_node;
			}
			current_node = current_node.next;
		}
	}

	this.removeNodeWithValue = function(value){
		var previous_node = this.returnPreviousNodeofNodeWithValue(value);
		remove_node = previous_node.next;
		previous_node.next = remove_node.next;
		remove_node = null;
		return true;
	}
}

function removeDuplicatesFromUnsortedLinkedList(linked_list){
	var hash_table = {};

	var current_node = linked_list.head;

	while (current_node){

		if(hash_table.hasOwnProperty(current_node.value)){
			linked_list.removeNodeWithValue(current_node.value);
		}
		hash_table[current_node.value] = 1;
	}
	return linked_list;
}


var sll = new SinglyLinkedList();
sll.addNode(1);
sll.addNode(2);
sll.addNode(3);
sll.addNode(4);

removeDuplicatesFromUnsortedLinkedList(sll)


// module.exports = removeDuplicatesFromUnsortedLinkedList;