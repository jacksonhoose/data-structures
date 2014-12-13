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

		if(parent.value === val) {
			return true;
		} 

		if(val < parent.value){
			if(parent.left !== null){
				if(parent.left.contains(val, parent.left)) 
					return true;
			} 
		} else {
			if(parent.right !== null){
				if(parent.right.contains(val, parent.right)) 
					return true;
			}
		}

		return false;

	};

	tree.depthFirstLog = function(cb, parent){
		parent = parent || this;
		
		cb(parent.value);

		if(parent.right){
			parent.right.depthFirstLog(cb, parent.right);
		}

		if(parent.left){
			parent.left.depthFirstLog(cb, parent.right);
		}

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
