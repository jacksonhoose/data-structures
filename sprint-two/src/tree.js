var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = null;
  return newTree;
};

var treeMethods = {
	addChild: function(value){
		var tree = new Tree(value);
		this.children = this.children === null ? [tree] : this.children.concat(tree);
	},
	contains: function(target, currentTree){
		currentTree = currentTree || this;
		if(currentTree.value === target){
			return true;
		} else if(currentTree.children === null){
			return false;
		} else {
			for(var i = 0; i < currentTree.children.length; i++){
				if(this.contains(target, currentTree.children[i])) return true;
			}
			if(currentTree.value !== target) 
				return false;
		}
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
