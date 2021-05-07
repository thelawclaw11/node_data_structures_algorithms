const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.right = null;
        this.left = null;
        //this.size = 1
    }
}

class BinarySearchTree {
    constructor(values) {
        this.root = null;
    }

    insert(valueToInsert) {
        if (this.root === null) {
            this.root = new Node(valueToInsert);
        } else {
            const newNode = new Node(valueToInsert);

            const inner = (currentNode) => {
                //currentNode.size++

                if (valueToInsert < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        newNode.parent = currentNode;
                    } else {
                        inner(currentNode.left);
                    }
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        newNode.parent = currentNode;
                    } else {
                        inner(currentNode.right);
                    }
                }
            };

            inner(this.root);
        }
        return valueToInsert;
    }

    getNodeByValue(value) {
        const inner = (currentNode) => {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                return inner(currentNode.left);
            } else if (value > currentNode.value) {
                return inner(currentNode.right);
            }
        };
        return inner(this.root);
    }

    _deleteSelfFromParent(child) {
        const parent = child.parent;
        if (parent.left === child) {
            parent.left = null;
        } else {
            parent.right = null;
        }
    }

    _getParentReferenceToSelf(child) {
        const parent = child.parent;
        if (parent.left === child) {
            return parent.left;
        } else {
            return parent.right;
        }
    }

    remove(nodeToRemove) {
        if (nodeToRemove.left === null && nodeToRemove.right === null) {
            if (nodeToRemove === this.root) {
                this.root = null;
            } else if (nodeToRemove.parent.left === nodeToRemove) {
                nodeToRemove.parent.left = null;
            } else {
                nodeToRemove.parent.right = null;
            }
            return;
        }

        if (nodeToRemove.left === null && nodeToRemove.right !== null) {
            if (nodeToRemove === this.root) {
                this.root = nodeToRemove.right;
            } else if (nodeToRemove.parent.left === nodeToRemove) {
                nodeToRemove.parent.left = nodeToRemove.right;
            } else {
                nodeToRemove.parent.right = nodeToRemove.right;
            }
            nodeToRemove.right.parent = nodeToRemove.parent;
            return;
        }

        if (nodeToRemove.right === null && nodeToRemove.left !== null) {
            if (nodeToRemove === this.root) {
                this.root = nodeToRemove.left;
            } else if (nodeToRemove.parent.right === nodeToRemove) {
                nodeToRemove.parent.right = nodeToRemove.left;
            } else {
                nodeToRemove.parent.left = nodeToRemove.left;
            }
            nodeToRemove.left.parent = nodeToRemove.parent;
            return;
        }

        const predecessor = this.getMax(nodeToRemove.left);

        if (predecessor.left === null) {
            this._deleteSelfFromParent(predecessor);
        } else {
            predecessor.left.parent = predecessor.parent;
            predecessor.parent.right = predecessor.left;
        }
        nodeToRemove.value = predecessor.value;
        return;
    }

    removeByValue(value) {
        const target = this.getNodeByValue(value);
        this.remove(target);
    }

    getMin(root) {
        let current = root;

        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    getMax(root) {
        let current = root;

        while (current.right !== null) {
            current = current.right;
        }
        return current;
    }

    getSortedArray() {
        const out = [];

        const inner = (currentNode) => {
            if (currentNode === null) {
                return;
            }
            inner(currentNode.left);
            out.push(currentNode.value);
            inner(currentNode.right);
        };
        inner(this.root);
        return out;
    }
}

const bst = new BinarySearchTree();

const array = [20, 30, 40, 50, 60, 70, 80, 90, 100];

//const array = [20, 10, 80]

array.forEach((val) => bst.insert(val));

console.log(bst.getSortedArray());

prettyPrint(bst);

function bstSort(array) {
    const bst = new BinarySearchTree();
    array.forEach((val) => bst.insert(val));
    return bst.getSortedArray();
}
