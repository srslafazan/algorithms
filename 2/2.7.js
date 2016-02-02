// Implement a function to check if a linked list is a palindrome.

function Node(value){
	this.value = value;
	this.next;
}

function SinglyLinkedList(){
	this.head = new Node("head");
	this.addNodeWithValue = function (value){
		var runner = this.head;
		while(runner.next){
			runner = runner.next;
		}
		runner.next = new Node(value);
		return true;
	}
}

var sll1 = new SinglyLinkedList(); // is a palindrome

sll1.addNodeWithValue('a');
sll1.addNodeWithValue('b');
sll1.addNodeWithValue('b');
sll1.addNodeWithValue('a');

var sll2 = new SinglyLinkedList(); // not a palindrome

sll2.addNodeWithValue('a');
sll2.addNodeWithValue('b');
sll2.addNodeWithValue('c');
sll2.addNodeWithValue('d');



