// Given a circular linked list, implement an algorithm which returns the node at the
// beginning of the loop.

function Node(value){
	this.value = value;
	this.next;
}

function CircularSinglyLinkedList(){
	this.head = new Node("head");
	this.addNodeWithValue = function (value){
		var runner = this.head;
		while(runner.next && runner.next != this.head){
			runner = runner.next;
		}
		runner.next = new Node(value);
		runner.next.next = this.head;
		return true;
	}
}

var sll1 = new SinglyLinkedList();

sll1.addNodeWithValue(1);
sll1.addNodeWithValue(2);
sll1.addNodeWithValue(3);
sll1.addNodeWithValue(4);

var sll2 = new SinglyLinkedList();

sll2.addNodeWithValue(2);
sll2.addNodeWithValue(3);
sll2.addNodeWithValue(4);
sll2.addNodeWithValue(5);


