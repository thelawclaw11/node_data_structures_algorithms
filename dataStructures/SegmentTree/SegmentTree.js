class Node {
    left = null;
    right = null;
    start = null;
    end = null;
    data = null;

    constructor(data) {
        this.data = data;
    }
}

class SegmentTree {
    root = null;
    constructor(array) {
        let bottomLayer = [];

        for (let i = 0; i < array.length; i++) {
            const newNode = new Node(array[i]);
            newNode.start = i;
            newNode.end = i;
            bottomLayer.push(newNode);
        }

        while (bottomLayer.length > 1) {
            const newBottomLayer = [];

            for (let i = 0; i < bottomLayer.length; i += 2) {
                const leftNode = bottomLayer[i];
                const rightNode = bottomLayer[i + 1];
                const max = Math.max(
                    leftNode ? leftNode.data : -Infinity,
                    rightNode ? rightNode.data : -Infinity
                );
                const newNode = new Node(max);
                newNode.start = leftNode.start;
                newNode.end = rightNode.end;
                newNode.left = leftNode;
                newNode.right = rightNode;
                newBottomLayer.push(newNode);
            }
            bottomLayer = newBottomLayer;
        }
        this.root = bottomLayer[0];
    }

    rangeMax(start, end) {
        function traverse(node) {
            //node is disjoint
            if (node.end < start || node.start > end) {
                return -Infinity;
            }

            //range covers node
            if (node.start >= start && node.end <= end) {
                return node.data;
            }

            //all other cases
            return Math.max(traverse(node.left), traverse(node.right));
        }
        return traverse(this.root);
    }
}

module.exports = SegmentTree;
