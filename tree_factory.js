
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



    const deleteValue = (value, node = root) => {

        if (node == null) return node;
        else if (value < node.data) node.left = deleteValue(value, node.left);
        else if (value > node.data) node.right = deleteValue(value, node.right);
        else {

            if (node.left == null && node.right == null) {
                node = null;
                return node
            }
        }
        return node
    }

    const find = (value, node = root) => {

        if (value == node.data) return node;
        else if (value < node.data) return find(value, node.left);
        else if (value > node.data) return find(value, node.right);

    }

    const height = (node = root) => {

        if (node == null) return 0

        if (node.left == null && node.right == null) return 1
        //else if (node.left !== null) return 1  + height(node.left)
        //else if (node.right !== null) return 1  + height(node.right)
        else {

            return 1 + ((height(node.left) > height(node.right)) ? height(node.left) : height(node.right))

        }

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
        deleteValue,
        find,
        height
      }
}

let firstTree = Tree([  1,2,3 ])

console.log(firstTree.prettyPrint(firstTree.root))
console.log(firstTree.height())
firstTree.insert(4)
firstTree.insert(5)
console.log(firstTree.prettyPrint(firstTree.root))
console.log(firstTree.height())

