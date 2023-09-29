
const Node = require("./Node_factory.js")

const Tree = (array) => {

    const root = buildTree(_sortAndRemoveDuplicates(array))

    const _sortAndRemoveDuplicates = (array) => {
        let finalArray = array.sort((a, b) => a - b ) // sort array
        finalArray = array.filter((item, index) => array.indexOf(item) === index) // remove duplicates

        return finalArray
    }

    const buildTree = (array) => {




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


      return {
        removeDuplicates,
        sortArray
      }
}

let firstTree = Tree()

console.log(firstTree.sortArray(firstTree.removeDuplicates([9,8,8,7,6,6,5,5,4,3,2,2])))