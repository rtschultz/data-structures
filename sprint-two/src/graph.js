

// Instantiate a new graph
var Graph = function(value) {
  this.nodes = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a new node object with properties value and edge
  var newNode = {value: node, edge: []};
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  _.each(this.nodes, function(item) {
    if (item.value === node) {
      result = true;
    } 
  });
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index;
  _.each(this.nodes, function(item) {
    if (_.contains(item.edge, node)) {
      var nodeIndex = _.indexOf(item.edge, node);
      item.edge.splice(nodeIndex, 1);
    }
  });
  _.each(this.nodes, function(item) {
    if (item.value === node) {
      index = _.indexOf(this.nodes, item);
    }
  });
  this.nodes.splice(index, 1);
  //call removeEdge to remove edges on other nodes
//splice out node from nodes array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      if (_.contains(item.edge, toNode)) {
        result = true;
      }
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      item.edge.push(toNode);
    } else if (item.value === toNode) {
      item.edge.push(fromNode);
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      var toIndex = _.indexOf(item.edge, toNode);
      item.edge.splice(toIndex, 1);
    }
  });
  _.each(this.nodes, function(item) {
    if (item.value === toNode) {
      var fromIndex = _.indexOf(item.edge, fromNode);
      item.edge.splice(fromIndex, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  return _.map(this.nodes, function(item) {
    return cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
// An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// What is the time complexity of the above functions?


