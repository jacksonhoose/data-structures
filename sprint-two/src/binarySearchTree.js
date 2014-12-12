var BinarySearchTree = function(value){
	var tree = {};

	tree.value = value;
	tree.left = null;
	tree.right = null;

	tree.insert = function(val, parent){
		parent = parent || this;
		var tree = new BinarySearchTree(val);

		if(val < parent.value){
			this.left = tree;
		} else {
			this.right = tree;
		}
	};

	tree.contains = function(){

	};

	tree.depthFirstLog = function(){

	};

	return tree;
};

// function Leaf(value, left, right, parent){
// 	return {
// 		value: value,
// 		left: left || null,
// 		right: right || null,
// 		parent: parent || null
// 	}
// }
