
const Node = require("./Node_factory.js")

const Tree = (array) => {

    const _sortAndRemoveDuplicates = (array) => {
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

    const insert = (value) => {

        let currentNode = root;

        while (!(currentNode.left == null && currentNode.right == null)) { // while node is not a leaf go to appropriate next node
            if (currentNode.data == value) throw new Error("duplicate value") // check for duplicates

            if (currentNode.data < value && currentNode.right == null) {
                currentNode.right = Node(value)
                return
            }

            if (currentNode.data > value && currentNode.left == null) {
                currentNode.left = Node(value)
                return
            }

            currentNode.data > value ? currentNode = currentNode.left : currentNode = currentNode.right 
        }
        
        currentNode.data > value ? currentNode.left = Node(value) : currentNode.right = Node(value)
    }

    const deleteValue = (value) => {

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

      const root = buildTree(_sortAndRemoveDuplicates(array))

      return {
        root,
        prettyPrint,
        insert,
        deleteValue
      }
}

let firstTree = Tree([  1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324 ])

console.log(firstTree.prettyPrint(firstTree.root))
firstTree.insert(7.5)
firstTree.insert(4.5)
firstTree.insert(7000)
console.log(firstTree.prettyPrint(firstTree.root))