
const Node = require("./Node_factory.js")

const Tree = () => {

    const _sortArray = (array) => {
        if ( array.length < 2 ) return array

        let half = Math.floor(array.length / 2);
    
        let leftSorted = mergeSort(array.slice(0, half));
        let rightSorted = mergeSort(array.slice(half));
    
        let sortedArray = [];
    
    
        while (leftSorted.length > 0 && leftSorted.length > 0) {
            
            arrayMin = leftSorted[0] > rightSorted[0] ? rightSorted : leftSorted;
            
            // add llowest first element to sorted array while removing from original array
            sortedArray.push(arrayMin.shift())
        }
        
        // add remainding numbers in either right or left array to sorted array
        return sortedArray.concat(rightSorted, leftSorted)
    }

    const removeDuplicates = (array) => {
        return array.filter((item, index) => array.indexOf(item) === index)
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
        removeDuplicates
      }
}

let firstTree = Tree()

console.log(firstTree.removeDuplicates([1,1,2,2,3,3]))