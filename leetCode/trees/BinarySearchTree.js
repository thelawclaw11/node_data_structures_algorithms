// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function add(root, newValue) {
    if (newValue === null) {
        return;
    }

    const newNode = new TreeNode(newValue);

    const traverse = (currentNode) => {
        if (newNode.val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                traverse(currentNode.left);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                traverse(currentNode.right);
            }
        }
    };

    traverse(root);
}
function newRootFromArray(array) {
    const root = new TreeNode(array[0]);
    addArray(root, array.slice(1));
    return root;
}

function addArray(root, array) {
    for (const num of array) {
        add(root, num);
    }
}

function preorderTraversal(root) {
    const result = [];

    const traverse = (currentNode) => {
        if (currentNode === null) {
            return;
        }

        result.push(currentNode.val);
        traverse(currentNode.left);
        traverse(currentNode.right);
    };
    traverse(root);
    return result;
}

function postorderTraversal(root) {
    const result = [];

    const traverse = (node) => {
        if (node === null) {
            return;
        }

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    };
    traverse(root);
    return result;
}

function inorderTraversal(root) {
    const result = [];

    const traverse = (node) => {
        if (node === null) {
            return;
        }

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };
    traverse(root);

    return result;
}

function rangeSumBST(root, low, high) {
    let total = 0;
    const traverse = (currentNode) => {
        if (currentNode === null) {
            return;
        }
        if (currentNode.val >= low && currentNode.val <= high) {
            total += currentNode.val;
        }

        if (currentNode.val <= high) {
            traverse(currentNode.right);
        }
        if (currentNode.val >= low) {
            traverse(currentNode.left);
        }
    };
    traverse(root);

    return total;
}

function maxDepth(root, pathLength = 1) {
    if (root === null) {
        return pathLength - 1;
    }
    const leftLength = maxDepth(root.left, pathLength + 1);
    const rightLength = maxDepth(root.right, pathLength + 1);

    return Math.max(leftLength, rightLength);
}

function minDepth(root) {
    if (root === null) {
        return 0;
    }
    let shortestPath = Infinity;

    const traverse = (node, path) => {
        if (node.left === null && node.right === null) {
            shortestPath = Math.min(shortestPath, path);
        }

        if (node.left !== null) {
            traverse(node.left, path + 1);
        }

        if (node.right !== null) {
            traverse(node.right, path + 1);
        }
    };

    traverse(root, 1);

    return shortestPath;
}

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(value) {
        const node = new QueueNode(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue() {
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.value;
    }
}

function levelOrder(root) {
    if (root === null) {
        return [];
    }
    const levels = [];

    let currentLevel = [root];

    while (currentLevel.length > 0) {
        const currentLevelVals = currentLevel.map((node) => node.val);
        levels.push(currentLevelVals);

        const newCurrentLevel = [];

        for (const node of currentLevel) {
            if (node.left !== null) {
                newCurrentLevel.push(node.left);
            }
            if (node.right !== null) {
                newCurrentLevel.push(node.right);
            }
        }

        currentLevel = newCurrentLevel;
    }

    return levels;
}

function largestValues(root) {
    const levels = levelOrder(root);

    return levels.map((level) => Math.max(...level));
}

function deepestLeavesSum(root) {
    const levels = levelOrder(root);
    const deepestLevel = levels[levels.length - 1];
    return deepestLevel.reduce((accum, current) => accum + current);
}

function averageOfLevels(root) {
    if (root === null) {
        return [];
    }
    const averages = [];

    let currentLevel = [root];

    while (currentLevel.length > 0) {
        let currentLevelSum = 0;

        const newCurrentLevel = [];

        for (const node of currentLevel) {
            currentLevelSum += node.val;
            if (node.left !== null) {
                newCurrentLevel.push(node.left);
            }
            if (node.right !== null) {
                newCurrentLevel.push(node.right);
            }
        }

        averages.push(currentLevelSum / currentLevel.length);
        currentLevel = newCurrentLevel;
    }

    return averages;
}

function deleteNode(root, key) {
    return helper(root, key);

    function findNodeAndParent(root, key) {
        const inner = (node, parent) => {
            if (node === null) {
                return [null, null];
            }
            if (key === node.val) {
                return [node, parent];
            }

            if (key < node.val) {
                return inner(node.left, node);
            }

            if (key > node.val) {
                return inner(node.right, node);
            }
        };
        return inner(root, null);
    }

    function getMax(node, nodeParent) {
        let parent = nodeParent;
        let current = node;

        while (current.right !== null) {
            parent = current;
            current = current.right;
        }
        return [current, parent];
    }

    function helper(root, key) {
        if (root === null) {
            return root;
        }

        const [node, parent] = findNodeAndParent(root, key);

        //console.log(node, parent);
        if (node === null) {
            return root;
        }

        //node has no children
        if (node.left === null && node.right === null) {
            if (node === root) {
                root = null;
                return root;
            }
            if (parent.left === node) {
                parent.left = null;
            } else {
                parent.right = null;
            }
            return root;
        }

        //node has one right child
        if (node.left === null && node.right !== null) {
            if (node === root) {
                root = node.right;
                return root;
            }
            if (parent.left === node) {
                parent.left = node.right;
            } else {
                parent.right = node.right;
            }
            return root;
        }

        //node has one left child
        if (node.right === null && node.left !== null) {
            if (node === root) {
                root = node.left;
                return root;
            }
            if (parent.right === node) {
                parent.right = node.left;
            } else {
                parent.left = node.left;
            }
            return root;
        }

        //node has both left and right children

        const [predecessor, predecessorParent] = getMax(node.left, node);

        if (predecessorParent === node) {
            //node is parent of predecessor
            node.left = predecessor.left;
        } else {
            predecessorParent.right = predecessor.left;
        }

        node.val = predecessor.val;

        return root;
    }
}

function invertTree(root) {
    const traverse = (node) => {
        if (node === null) {
            return;
        }

        [node.left, node.right] = [node.right, node.left];
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    return root;
}

function isSameTree(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (right === null || left === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
}

function serialize(root) {
    const array = [null];
    if (!root || root.val === null || root.val === undefined) {
        return "";
    }

    function traverse(node, index) {
        if (!node) {
            return;
        }

        array[index] = node.val;

        const leftChildIndex = index * 2;
        const rightChildIndex = leftChildIndex + 1;

        traverse(node.left, leftChildIndex);
        traverse(node.right, rightChildIndex);
    }

    traverse(root, 1);

    return array.join(",");
}

function deserialize(string) {
    const alpha = string.split(",");

    const array = alpha.map((x) => (x === "" ? null : Number(x)));

    if (array.length === 1) {
        return null;
    }

    const root = new TreeNode();

    function traverse(node, index) {
        const value = array[index];
        node.val = value;

        const leftChildIndex = index * 2;
        const rightChildIndex = leftChildIndex + 1;

        if (leftChildIndex < array.length && array[leftChildIndex] !== null) {
            node.left = new TreeNode();
            traverse(node.left, leftChildIndex);
        }

        if (rightChildIndex < array.length && array[rightChildIndex] !== null) {
            node.right = new TreeNode();
            traverse(node.right, rightChildIndex);
        }
    }
    traverse(root, 1);

    return root;
}

module.exports = {
    serialize,
    deserialize,
    isSameTree,
    newRootFromArray,
    inorderTraversal,
    deleteNode,
    levelOrder,
    add,
    TreeNode,
};
