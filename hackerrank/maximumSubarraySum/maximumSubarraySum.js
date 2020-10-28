const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}
const fs = require("fs");
const slow = require("./solveSlow");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.height = 0;
    }

    get balanceFactor() {
        return getHeight(this.left) - getHeight(this.right);
    }
}

function updateHeight(node) {
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function getHeight(node) {
    if (node === null) {
        return -1;
    } else {
        return node.height;
    }
}

class AvlTree {
    constructor() {
        this.root = null;
    }

    insert(valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (this.root === null) {
            this.root = newNode;
        } else {
            const traverse = (root) => {
                if (valueToInsert < root.value) {
                    if (root.left === null) {
                        root.left = newNode;
                        newNode.parent = root;
                    } else {
                        traverse(root.left);
                    }
                } else if (valueToInsert > root.value) {
                    if (root.right === null) {
                        root.right = newNode;
                        newNode.parent = root;
                    } else {
                        traverse(root.right);
                    }
                }
            };
            traverse(this.root);
        }

        this.checkBalance(newNode);

        return valueToInsert;
    }

    checkBalance(node) {
        let currentNode = node;
        while (currentNode) {
            updateHeight(currentNode);
            this.balance(currentNode);
            currentNode = currentNode.parent;
        }
    }

    balance(node) {
        const rootBalanceFactor = node.balanceFactor;
        if (rootBalanceFactor > 1) {
            const leftBalanceFactor = node.left.balanceFactor;
            if (leftBalanceFactor > 0) {
                this.rotateLeftLeft(node);
            } else if (leftBalanceFactor < 0) {
                this.rotateLeftRight(node);
            }
        } else if (rootBalanceFactor < -1) {
            const rightBalanceFactor = node.right.balanceFactor;
            if (rightBalanceFactor < 0) {
                this.rotateRightRight(node);
            } else if (rightBalanceFactor > 0) {
                this.rotateRightLeft(node);
            }
        }
    }

    rotateLeftLeft(rootNode) {
        const leftNode = rootNode.left;
        rootNode.left = null;

        if (rootNode.parent) {
            if (rootNode.parent.left === rootNode) {
                rootNode.parent.left = leftNode;
                leftNode.parent = rootNode.parent;
            } else {
                rootNode.parent.right = leftNode;
                leftNode.parent = rootNode.parent;
            }
        } else if (rootNode === this.root) {
            this.root = leftNode;
        }

        if (leftNode.right) {
            const temp = leftNode.right;
            rootNode.left = temp;
            temp.parent = rootNode;
        }

        leftNode.right = rootNode;
        leftNode.parent = rootNode.parent;
        rootNode.parent = leftNode;
        updateHeight(rootNode);
        updateHeight(leftNode);
    }

    rotateRightRight(rootNode) {
        const rightNode = rootNode.right;
        rootNode.right = null;

        if (rootNode.parent) {
            if (rootNode.parent.left === rootNode) {
                rootNode.parent.left = rightNode;
                rightNode.parent = rootNode.parent;
            } else {
                rootNode.parent.right = rightNode;
                rightNode.parent = rootNode.parent;
            }
        } else if (rootNode === this.root) {
            this.root = rightNode;
        }

        if (rightNode.left) {
            const temp = rightNode.left;
            rootNode.right = temp;
            temp.parent = rootNode;
        }

        rightNode.left = rootNode;
        rightNode.parent = rootNode.parent;
        rootNode.parent = rightNode;
        updateHeight(rootNode);
        updateHeight(rightNode);
    }

    rotateLeftRight(rootNode) {
        this.rotateRightRight(rootNode.left);
        this.rotateLeftLeft(rootNode);
    }

    rotateRightLeft(rootNode) {
        this.rotateLeftLeft(rootNode.right);
        this.rotateRightRight(rootNode);
    }
}

function getMinimumValueLargerThan(tree, value) {
    let minValue = null;
    const traverse = (current) => {
        if (current === null) {
            return;
        }
        if (value < current.value) {
            if (current.value < minValue || minValue === null) {
                minValue = current.value;
            }
            return traverse(current.left);
        }
        if (value > current.value) {
            return traverse(current.right);
        }
    };
    traverse(tree.root);
    return minValue;
}

function maximumSum(array, mod) {
    const length = array.length;
    const prefixSum = Array(length).fill(0);

    prefixSum[0] = array[0] % mod;

    for (let i = 1; i < length; i++) {
        prefixSum[i] = (prefixSum[i - 1] + array[i] + mod) % mod;
    }
    //prettyPrint(tree);

    const tree = new AvlTree();
    tree.insert(prefixSum[0]);

    let result = prefixSum[0];

    for (let i = 1; i < length; i++) {
        const a = getMinimumValueLargerThan(tree, prefixSum[i]);
        if (a !== null) {
            result = Math.max((prefixSum[i] - a + mod) % mod, result);
        }
        result = Math.max(prefixSum[i], result);
        tree.insert(prefixSum[i]);
    }
    //prettyPrint(tree);

    return result;
}

const one = "412776092 1424268981 1911759957 749241874 137806863 42999171 982906997 135497282 511702306 2084420926 1937477085 1827336328 572660337 1159126506 805750847 1632621730 1100661314 1433925858 1141616125 84353896 939819583 2001100546 1998898815 1548233368 610515435 1585990365 1374344044 760313751 1477171088 356426809 945117277 1889947179 1780695789 709393585 491705404 1918502652 752392755 1474612400 2053999933 1264095061 1411549677 1843993369 943947740 1984210013 855636227 1749698587 1469348095 1956297540 1036140796 463480571"
    .split(" ")
    .map(Number);
console.log(one);
const oneMod = 184803527;
console.log(slow(one, oneMod));
console.log(maximumSum(one, oneMod));

// console.log(maximumSum([3, 3, 9, 9, 5], 7));
// console.log(maximumSum([1, 5, 9], 5));
//console.log(maximumSum([1, 2, 3, 4, 5, 6, 7, -8, 2, 12, 11], 15));

// const array = readTestCase("/input07.txt");
// const mod = 2104194685;
//
// console.log(maximumSum(array, mod));
//
// function readTestCase(path) {
//     const string = fs
//         .readFileSync(__dirname + path, "utf8")
//         .split(" ")
//         .map(Number);
//     return string;
// }

module.exports = maximumSum;
