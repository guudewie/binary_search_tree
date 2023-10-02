const Tree = require("./tree_factory")

// HOW TO USE THIS SCRIPT
// install node on your machine and run $node test_script.js
// watch the Terminal

// START HELPER FUNCTIONS

function createRandomArray() {
     
    let randomArray = [];
    let randomLength = 0;

    // random size of array between 75 and 100
    while (randomLength < 10 || randomLength > 20) {
        randomLength = Math.ceil(Math.random() * 100)
    }

    // random numbers in array
    for (let index = 0; index <= randomLength; index++) {
        randomArray.push(Math.ceil(Math.random() * 100))
    }

    return randomArray
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

// START SCRIPT

console.log("\n\n***********  INITIAL TREE  ***********\n")

let testTree = Tree(createRandomArray())
prettyPrint(testTree.root)

console.log("\n")
console.log("Tree is balanced:", testTree.isBalanced())

console.log("\n\n***********  TREE TRAVERSAL  ***********\n")

console.log("-> Level Order:", testTree.levelOrder(), "\n")
console.log("-> In Order:", testTree.inOrder(), "\n")
console.log("-> Pre Order:", testTree.preOrder(), "\n")
console.log("-> Post Order:", testTree.postOrder())

console.log("\n\n***********  UNBALANCING  ***********\n")

testTree.insert(111)
testTree.insert(126)
testTree.insert(178)

prettyPrint(testTree.root)
console.log("\n")
console.log("Tree is balanced:", testTree.isBalanced())

console.log("\n\n***********  REBALANCE  ***********\n")

prettyPrint(testTree.reBalance())
console.log("\n")
console.log("Tree is balanced:", testTree.isBalanced(), "\n\n\n")