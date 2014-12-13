var BinarySearchTree = function(value){
	var tree = {};

	tree.value = value;
	tree.left = null;
	tree.right = null;

	tree.insert = function(val, parent){
		parent = parent || this;

		if(val < parent.value){
			if(parent.left === null){
				parent.left = new BinarySearchTree(val);
			} else {
				parent.insert(val, parent.left);
			}
		} else {
			if(parent.right === null){
				parent.right = new BinarySearchTree(val);
			} else {
				parent.insert(val, parent.right);
			}
		}
	};

	tree.contains = function(val, parent){
		parent = parent || this;

		// return _.reduce(tree, function(val, tree){
		// 	return t
		// }, tree.value);
		if(parent.value === val) {
			return true;
		}
		if(parent.left === null && parent.right === null){
			return false;
		} else {
			if(val < parent.value){
				parent.contains(val, parent.left);
			} else {
				parent.contains(val, parent.right);
			}
		}
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
