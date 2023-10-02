const Tree = require("./tree_factory")

// HOW TO USE THIS SCRIPT
// install node on your machine and run $node test_script.js
// watch the Terminal

// START SCRIPT

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


let testTree = Tree(createRandomArray())
testTree.prettyPrint(testTree.root)