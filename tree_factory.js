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

            // Case 1: No childs
            if (node.left == null && node.right == null) {
                node = null;
            }
            // Case 2: One child
            else if (node.left == null) {
                currentNode = node;
                node = node.right;
            } else if (node.right == null) {
                currentNode = node;
                node = node.left;
            }
            // Case 3: 2 children
            else {
                nextBiggestNode = _findNextBiggest(node.right);
                node.data = nextBiggestNode.data
                node.right = deleteValue(nextBiggestNode.data, node.right)
            }

        }
        return node
    }

    const _findNextBiggest = (node) => {

        if (node.left == null) return node
        else return _findNextBiggest(node.left)
    }

    const find = (value, node = root) => {

        if (value == node.data) return node;
        else if (value < node.data) return find(value, node.left);
        else if (value > node.data) return find(value, node.right);
    }

    const height = (node = root) => {

        if (node == null) return 0

        if (node.left == null && node.right == null) return 1 // if leafe return height of one
        else return 1 + ((height(node.left) > height(node.right)) ? height(node.left) : height(node.right)) // if not leafe node, then return highest height of subtree
    }

    const levelOrder  = (callback, node = root) => {

        let queue = [];
        let levelOrderArray = [];

        if (node == null) return // return if node is empty

        queue.push(node) // push node in queue

        while (queue.length) {
            currentNode = queue[0]

            // push the current node value to array or pass to callback if applicable
            (!callback) ? levelOrderArray.push(currentNode.data) : callback(currentNode.data)

            // enqueue currentnode children in order: first left then right, log in next iteration of while loop
            if(currentNode.left !== null) queue.push(currentNode.left)
            if(currentNode.right !== null) queue.push(currentNode.right)

            queue.shift() // return logged note in queue
        }
        if (!callback) return levelOrderArray
    }

    const preOrder = (node = root) => {
        
        let preOrderArray = [];

        if (node == null) return []
        preOrderArray.push(node.data)
        preOrderArray.push(...preOrder(node.left))
        preOrderArray.push(...preOrder(node.right))

        return preOrderArray
    }
    
    const inOrder = (node = root) => {
        
        let inOrderArray = [];

        if (node == null) return []
        inOrderArray.push(...inOrder(node.left))
        inOrderArray.push(node.data)
        inOrderArray.push(...inOrder(node.right))

        return inOrderArray
    }

    const postOrder = (node = root) => {
        
        let postOrderArray = [];

        if (node == null) return []
        postOrderArray.push(...postOrder(node.left))
        postOrderArray.push(...postOrder(node.right))
        postOrderArray.push(node.data)

        return postOrderArray
    }

    const isBalanced = (node = root) => {

        leftHeight = height(node.left)
        rightHeight = height(node.right)

        if (Math.abs(leftHeight - rightHeight) > 1) return false
        else return true

    }

    const reBalance = (node = root) => {

        currentTreeArray = preOrder()
        node = buildTree(_sortAndRemoveDuplicates(currentTreeArray))
        return node 
    }

    const depth = (value, node = root) => {

        if (!node) throw new Error("value not found")
        if (node.data == value) return 0

        if (value < node.data) {
            const leftDepth = depth(value, node.left)
            return leftDepth == -1 ? -1 : leftDepth + 1
        }
        if (value > node.data) {
            const rightDepth = depth(value, node.right)
            return rightDepth == -1 ? -1 : rightDepth + 1
        }
    }


    // visualization of BST
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
        height,
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        isBalanced,
        reBalance,
        depth
      }
}

module.exports = Tree;