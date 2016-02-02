var assert = require('assert');
var js41 = require('../4/4.1.js');

Node = js41.Node;
BinaryTree = js41.BinaryTree;


// 4.1.js

describe('4.1.js', function() {
	// prepare binary tree examples
	before(function(){
		var balanced_tree = new BinaryTree(5);
		balanced_tree.add=(1);
		balanced_tree.add=(2);
		balanced_tree.add=(7);
		balanced_tree.add=(6);

		var unbalanced_tree = new BinaryTree(4);
		// unbalanced_tree.addNodeUnbalanced(5);
		// unbalanced_tree.addNodeUnbalanced(4);
		// unbalanced_tree.addNodeUnbalanced(9);
		// unbalanced_tree.addNodeUnbalanced(16);
		// unbalanced_tree.addNodeUnbalanced(-4);
		// unbalanced_tree.addNodeUnbalanced(82);
	});

	describe('#BinaryTree()', function () {
		it('balanced_tree.isBalanced() should return true', function (){
			assert.equal(true, balanced_tree.isBalanced());
		});
		// it('unbalanced_tree.isBalanced() should return false', function(){
		// 	assert.equal(true, unbalanced_tree.isBalanced());
		// });
	});

});