const Node = (data, leftNode = null, rightNode = null) => {

    return {
        data : data,
        left : leftNode,
        right : rightNode
    }
}

module.exports = Node;

