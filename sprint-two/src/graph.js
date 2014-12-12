var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = new GraphNode(node);
};

Graph.prototype.contains = function(node){
	return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
	if(this.contains(node)){
		delete this.nodes[node];
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return this.nodes[fromNode].edges.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
	this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.nodes[fromNode].edges[toNode];
	delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
	for(var k in this.nodes){
		cb(this.nodes[k].value);
	}
};

function GraphNode(value){
	var node = {};
	node.value = value;
	node.edges = {};
	return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
