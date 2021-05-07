const { TreeNode, serialize, deserialize, levelOrder } = require("./BinarySearchTree");

describe("serialize and deserialize", () => {
    it("one", () => {
        const root = new TreeNode(1);

        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        const serialized = serialize(root);
        console.log(serialized);

        const deserialized = deserialize(serialized);
        console.log(deserialized);

        // console.log(levelOrder(deserialized));

        // expect(bst.isSameTree(root, deserialized)).toBe(true);
    });

    it("two", () => {
        const root = new TreeNode();

        const serialized = serialize(root);

        const deserialized = deserialize(serialized);
        console.log(deserialized);

        // expect(bst.isSameTree(root, deserialized)).toBe(true);
    });

    // it("two", () => {
    //     const nums = [1, 2, 3, null, null, 4, 5];
    //
    //     const root = bst.newRootFromArray(nums);
    //     console.log(bst.inorderTraversal(root));
    //
    //     const serialized = bst.serialize(root);
    //
    //     console.log(serialized);
    //
    //     const deserialized = bst.deserialize(serialized);
    //     console.log(deserialized);
    //
    //     expect(bst.isSameTree(root, deserialized)).toBe(true);
    // });
});
