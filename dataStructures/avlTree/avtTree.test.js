const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

const AvlTree = require("./avlTree");

describe("avl Tree", () => {
    it("should do simple left-left rotation", () => {
        const tree = new AvlTree();

        tree.insert(4);
        expect(tree.root.height).toBe(0);
        tree.insert(3);
        expect(tree.root.height).toBe(1);

        tree.insert(2);
        prettyPrint(tree.root);
        expect(tree.root.height).toBe(1);
        expect(tree.root.left.height).toBe(0);
        expect(tree.root.right.height).toBe(0);

        expect(tree.toString()).toBe("2,3,4");
        expect(tree.root.value).toBe(3);
        expect(tree.root.height).toBe(1);

        tree.insert(1);

        expect(tree.toString()).toBe("1,2,3,4");
        expect(tree.root.value).toBe(3);
        expect(tree.root.height).toBe(2);

        tree.insert(0);

        expect(tree.toString()).toBe("0,1,2,3,4");
        expect(tree.root.value).toBe(3);
        expect(tree.root.left.value).toBe(1);
        expect(tree.root.height).toBe(2);

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should do complex left-left rotation", () => {
        const tree = new AvlTree();

        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(10);

        expect(tree.root.value).toBe(30);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("10,20,30,40");

        tree.insert(25);

        expect(tree.root.value).toBe(30);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("10,20,25,30,40");

        tree.insert(5);
        prettyPrint(tree.root);
        expect(tree.root.value).toBe(20);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("5,10,20,25,30,40");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should do simple right-right rotation", () => {
        const tree = new AvlTree();

        tree.insert(2);
        tree.insert(3);
        tree.insert(4);

        expect(tree.toString()).toBe("2,3,4");
        expect(tree.root.value).toBe(3);
        expect(tree.root.height).toBe(1);

        tree.insert(5);

        expect(tree.toString()).toBe("2,3,4,5");
        expect(tree.root.value).toBe(3);
        expect(tree.root.height).toBe(2);

        tree.insert(6);

        expect(tree.toString()).toBe("2,3,4,5,6");
        expect(tree.root.value).toBe(3);
        expect(tree.root.right.value).toBe(5);
        expect(tree.root.height).toBe(2);

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should do complex right-right rotation", () => {
        const tree = new AvlTree();

        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(50);

        expect(tree.root.value).toBe(30);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("20,30,40,50");

        tree.insert(35);
        expect(tree.root.value).toBe(30);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("20,30,35,40,50");

        tree.insert(55);
        expect(tree.root.value).toBe(40);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("20,30,35,40,50,55");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should do left-right rotation", () => {
        const tree = new AvlTree();

        tree.insert(30);
        //prettyPrint(tree);
        tree.insert(20);
        //prettyPrint(tree);
        tree.insert(25);
        //prettyPrint(tree);

        expect(tree.root.height).toBe(1);
        expect(tree.root.value).toBe(25);
        expect(tree.toString()).toBe("20,25,30");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should do right-left rotation", () => {
        const tree = new AvlTree();

        tree.insert(30);
        tree.insert(40);
        tree.insert(35);

        expect(tree.root.height).toBe(1);
        expect(tree.root.value).toBe(35);
        expect(tree.toString()).toBe("30,35,40");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should create balanced tree: case #1", () => {
        // @see: https://www.youtube.com/watch?v=rbg7Qf8GkQ4&t=839s
        const tree = new AvlTree();

        tree.insert(1);
        tree.insert(2);
        tree.insert(3);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(1);
        expect(tree.toString()).toBe("1,2,3");

        tree.insert(6);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("1,2,3,6");

        tree.insert(15);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("1,2,3,6,15");

        tree.insert(-2);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("-2,1,2,3,6,15");

        tree.insert(-5);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("-5,-2,1,2,3,6,15");

        tree.insert(-8);

        expect(tree.root.value).toBe(2);
        expect(tree.root.height).toBe(3);
        expect(tree.toString()).toBe("-8,-5,-2,1,2,3,6,15");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should create balanced tree: case #2", () => {
        const tree = new AvlTree();

        tree.insert(43);
        tree.insert(18);
        tree.insert(22);
        tree.insert(9);
        tree.insert(21);
        tree.insert(6);

        expect(tree.root.value).toBe(18);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("6,9,18,21,22,43");

        tree.insert(8);

        expect(tree.root.value).toBe(18);
        expect(tree.root.height).toBe(2);
        expect(tree.toString()).toBe("6,8,9,18,21,22,43");

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });

    it("should balance ascending values", () => {
        const tree = new AvlTree();

        tree.insert(2);
        tree.insert(4);
        tree.insert(6);

        expect(tree.root.value).toBe(4);
        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
    });
    it("should be a binary search tree", () => {
        const tree = new AvlTree();

        //const array = generateUnsortedArray(10);

        const array = [35, 70, 14, 99, 36, 71, 71, 6, 27, 49, 59];

        const slice = array.slice(0, 11);

        for (const value of slice) {
            tree.insert(value);
        }

        prettyPrint(tree);

        // console.log(slice);

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);

        //console.log(tree.traverseInOrder());
        expect(tree.traverseInOrder()).toEqual(slice.sort((a, b) => a - b));
    });
    it("should be a binary search tree two", () => {
        const tree = new AvlTree();

        //const array = generateUnsortedArray(20);

        const array = [27, 92, 77, 37, 37, 69, 56, 47, 87, 45, 94, 20, 54, 22, 30, 82, 18, 88, 72, 43, 80];

        const slice = array;

        for (const value of slice) {
            tree.insert(value);
        }

        prettyPrint(tree);

        console.log(slice);

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);

        //console.log(tree.traverseInOrder());
        expect(tree.traverseInOrder()).toEqual(slice.sort((a, b) => a - b));
    });
    it("should be a binary search tree three", () => {
        const tree = new AvlTree();

        const array = generateUnsortedArray(10000);

        const slice = array;

        for (const value of slice) {
            tree.insert(value);
        }

        //prettyPrint(tree);

        //console.log(slice);

        expect(isValidBST(tree.root)).toBe(true);
        expect(isAVL(tree.root)).toBe(true);
        //console.log(tree.traverseInOrder());
        expect(tree.traverseInOrder()).toEqual(slice.sort((a, b) => a - b));
    });
});

function isAVL(node) {
    if (node === null) {
        return true;
    }

    if (node.balanceFactor > 1 || node.balanceFactor < -1) {
        return false;
    }

    return isAVL(node.left) && isAVL(node.right);
}

function isValidBST(node, min = null, max = null) {
    if (!node) return true;
    if (max !== null && node.value > max) {
        console.log(node);
        return false;
    }
    if (min !== null && node.value < min) {
        console.log(node);
        return false;
    }
    const leftSide = isValidBST(node.left, min, node.value);
    const rightSide = isValidBST(node.right, node.value, max);

    return leftSide && rightSide;
}

function generateUnsortedArray(n) {
    const out = [];

    for (let i = 0; i <= n; i++) {
        out.push(Math.round((Math.random() * 1000000) / 10000));
    }
    return out;
}
