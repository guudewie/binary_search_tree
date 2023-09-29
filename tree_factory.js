
const Node = require("./Node_factory.js")

const Tree = () => {

    function buildTree(array) {
    

        return //level-0 root node
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}

let firstNode = Node(5)
console.log(firstNode)
firstNode.left = Node(8)
console.log(firstNode)
