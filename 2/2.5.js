// You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that the 1's digit is at the head
// of the list. Write a function that adds the two numbers and returns the sum as a
// linked list.

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.

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

function buildReversedIntegerFromLinkedList(sll, runner){
	if (!runner){
		runner = sll.head.next;
	}
	if (!runner.next){
		return String(runner.value);
	}
	return String(buildReversedIntegerFromLinkedList(sll, runner.next)) + String(runner.value);
}

function sumTwoReversedLinkedListsAsIntegers(sll1, sll2){
	return parseInt(buildReversedIntegerFromLinkedList(sll1)) + parseInt(buildReversedIntegerFromLinkedList(sll2));
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


console.log(buildReversedIntegerFromLinkedList(sll1));
console.log(buildReversedIntegerFromLinkedList(sll2));

console.log(sumTwoReversedLinkedListsAsIntegers(sll1, sll2));