var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function(){
    if(this.head !== null) {
      var value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  };

  list.contains = function(target, currentNode){
    currentNode = currentNode || this.head;
    if(currentNode.value === target) {
      return true;
    } else if(currentNode.next === null) {
      return false;
    } else {
      return this.contains(target, currentNode.next);
    }
  };

  return list;

};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
