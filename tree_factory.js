
const Node = require("./Node_factory.js")

const Tree = (array) => {

    const sortAndRemoveDuplicates = (array) => {
        let finalArray = array.sort((a, b) => a - b ) // sort array
        finalArray = array.filter((item, index) => array.indexOf(item) === index) // remove duplicates

        return finalArray
    }

    const buildTree = (a) => {

        let start = 0;
        let end = a.length - 1 ;
        let mid = Math.ceil((start + end) / 2)

        if ( start > end) return null

        let root = Node(a[mid])
        root.left = buildTree(a.slice(start,  mid)) // end not included in slice return array, thus mid -1 will be last element
        root.right = buildTree(a.slice( mid + 1, end + 1)) // end not included in slice return array, thus +1

        return root
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

      const root = buildTree(sortAndRemoveDuplicates(array))

      return {
        sortAndRemoveDuplicates,
        root,
        prettyPrint
      }
}

let firstTree = Tree([1,2,3,4,5,6,7,8,9])

console.log(firstTree.prettyPrint(firstTree.root))
console.log(firstTree.root)