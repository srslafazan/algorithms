// Implement a function to check if a binary tree is balanced. For the purposes of this
// question, a balanced tree is defined to be a tree such that the heights of the two
// subtrees of any node never differ by more than one.

function Node(value){
	this.value = value;
	this.left;
	this.right;
}

function BinaryTree(root_value){
	this.root;
	if(root_value){
		this.root = new Node(root_value);
	}
}

BinaryTree.prototype = {
	constructor: BinaryTree,

	add: function(value){
		if(!this.root){
			this.root = new Node(value);
			return;
		}
		var runner = this.root;

		while(true){
			if ( value < runner.value ){

				if (runner.left){
          runner = runner.left;
        } else {
          runner.left = new Node(value);
          return;
        }
			} else if (value > runner.value){
				if (runner.right){
          runner = runner.right;
        } else {
          runner.right = new Node(value);
          return;
        }
			} else {
				return;
			}
		}
	},
	contains: function(value){
		
		var runner = this.root;

		while ( runner.value != value ) {
			if( value < runner.value ){
				if( runner.left ){
					runner = runner.left;
				} else {
					return false;
				}
			} else {
				if( runner.right ){
					runner = runner.right;
				} else {
					return false;
				}
			}
		}
		return true;
  },
  remove: function(value){
  	// ...
  },
  traverse: function(){

  },
  size: function(){
  	// ...
  },
  toArray: function(){
  	// ...
  },
  toString: function(){
  	// ...
  },
  isBalanced: function(){
  	// ...
  }
};


function treeIsBalanced(root){
	if(!root) return true;

}

function checkHeight(runner){
	if(!runner) return 0; // height is 0

	// find if left is balanced
	var leftHeight = checkHeight(runner.left);

	// find if right is balanced
	var rightHeight = checkHeight(runner.right);

	// return an int for height
	return 
}



// var tree = new BinaryTree(4);

// tree.add(1);
// tree.add(3);
// tree.add(4);
// tree.add(0);
// tree.add(5);
// console.log(tree);
// console.log(tree.contains(10));

// console.log(tree.root);
// console.log(tree.root.left);
// console.log(tree.root.right);
// console.log(tree.root.right.left);
// console.log(tree.root.right.right);

module.exports = { 'Node': Node, 'BinaryTree': BinaryTree };