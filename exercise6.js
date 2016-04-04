function Node(data) {
    this.data = data;
    this.children = [];
}
 
function Tree(data) {
    var node = new Node(data);
    this.root = node;
}
 
Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
 
        // step 1
    })(this.root);
 
};

var tree = new Tree(1);
 
tree.root.children.push(new Node(2));
tree.root.children.push(new Node(3));
tree.root.children.push(new Node(4));
 
tree.root.children[0].children.push(new Node(5));
 
tree.root.children[1].children.push(new Node(6));
tree.root.children[1].children.push(new Node(7));

tree.root.children[2].children.push(new Node(8));
tree.root.children[2].children.push(new Node(9));

tree.root.children[2].children[1].children.push(new Node(10));

tree.traverseDF(function (node){ console.log(node.data)});

