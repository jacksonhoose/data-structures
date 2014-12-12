var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(i);
  var tuple = new Tuple(k, v);
  if(!!val){
  	val.push(tuple);
  } else {
  	val = [tuple];
  }
  this._storage.set(i, val);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);
  
  if(value === undefined){
  	return false;
  } else if(value.length === 1){
  	return value[0][1];
  } else {
  	for(var x = 0; x < value.length; x++){
  		if(value[x][0] === k) 
        return value[x][1];
  	}
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);
  if(value.length === 1){
    value[0][1] = null;
  }
	this._storage.set(i, value);
};


function Tuple(k, v){
	return [k, v];
}

/*
 * Complexity: What is the time complexity of the above functions?
 */