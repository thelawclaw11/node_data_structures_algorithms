const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    get leftHeight() {
        if (!this.left) {
            return 0;
        }

        return this.left.height + 1;
    }

    get rightHeight() {
        if (!this.right) {
            return 0;
        }

        return this.right.height + 1;
    }

    get height() {
        // if (this.memoizedHeight !== null) {
        //     return this.memoizedHeight;
        // }

        return Math.max(this.leftHeight, this.rightHeight);
    }

    get balanceFactor() {
        return this.leftHeight - this.rightHeight;
    }

    traverseInOrder() {
        const out = [];

        const traverse = (currentNode) => {
            if (currentNode === null) {
                return;
            }
            traverse(currentNode.left);
            out.push(currentNode.value);
            traverse(currentNode.right);
        };
        traverse(this);
        return out;
    }
    toString() {
        return this.traverseInOrder().toString();
    }
}

class AvlTree {
    constructor() {
        this.root = null;
    }

    balance(node) {
        const rootBalanceFactor = node.balanceFactor;
        if (rootBalanceFactor > 1) {
            const leftBalanceFactor = node.left.balanceFactor;
            if (leftBalanceFactor > 0) {
                //console.log("rotateLeftLeft");
                this.rotateLeftLeft(node);
            } else if (leftBalanceFactor < 0) {
                //console.log("rotateLeftRight");
                this.rotateLeftRight(node);
            }
        } else if (rootBalanceFactor < -1) {
            const rightBalanceFactor = node.right.balanceFactor;
            if (rightBalanceFactor < 0) {
                //console.log("rotateRightRight");
                this.rotateRightRight(node);
            } else if (rightBalanceFactor > 0) {
                //console.log("rotateRightLeft");

                this.rotateRightLeft(node);
            }
        }
    }

    insert(valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (this.root === null) {
            this.root = newNode;
        } else {
            const traverse = (root) => {
                //console.log(root);
                if (valueToInsert < root.value) {
                    if (root.left === null) {
                        root.left = newNode;
                        newNode.parent = root;
                    } else {
                        traverse(root.left);
                    }
                } else {
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
            this.balance(currentNode);
            currentNode = currentNode.parent;
        }
    }

    traverseInOrder() {
        const out = [];

        const traverse = (currentNode) => {
            if (currentNode === null) {
                return;
            }
            traverse(currentNode.left);
            out.push(currentNode.value);
            traverse(currentNode.right);
        };
        traverse(this.root);
        return out;
    }
    toString() {
        return this.root.toString();
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

// const tree = new AvlTree();
//
// const input = generateUnsortedArray();
//
// for (const num of input) {
//     tree.insert(num);
// }

// console.log(tree.root.balanceFactor);
//
// console.log(input);
// console.log(tree.traverseInOrder());
//prettyPrint(tree);

//console.log(tree.traverseInOrder());

function generateUnsortedArray(n) {
    const out = [];

    for (let i = 0; i <= n; i++) {
        out.push(Math.round(Math.random() * 1000000));
    }
    return out;
}

module.exports = AvlTree;
