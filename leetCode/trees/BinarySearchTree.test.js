const bst = require("./BinarySearchTree");

describe("deleteNode", () => {
    it("should delete node with no children", () => {
        const nums = [5, 3, 6, 2, 4, 7, 1];
        const root = bst.newRootFromArray(nums);
        deleteNodeAndVerify(root, nums, 1);
    });

    it("should delete node with only left child", () => {
        const nums = [5, 3, 6, 2, 4, 7, 1];
        const root = bst.newRootFromArray(nums);
        deleteNodeAndVerify(root, nums, 2);
    });

    it("should delete node with only right child", () => {
        const nums = [5, 3, 6, 2, 4, 7, 1];
        const root = bst.newRootFromArray(nums);
        deleteNodeAndVerify(root, nums, 6);
    });

    it("should delete node with left and right children", () => {
        const nums = [20, 10, 30, 8, 15, 7, 9, 12, 19, 11, 14, 17, 13, 16, 18];
        const root = bst.newRootFromArray(nums);
        deleteNodeAndVerify(root, nums, 15);
    });

    it("one", () => {
        const nums = [5, 3, 6, 2, 4, 7, 1];
        const root = bst.newRootFromArray(nums);

        deleteNodeAndVerify(root, nums, 3);
    });

    it("two", () => {
        const root = new bst.TreeNode(0);

        bst.deleteNode(root, 0);
        expect(root).toBeNull();
    });

    // it("three", () => {
    //     const nums = [];
    //     const root = bst.newRootFromArray(nums);
    //
    //     deleteNodeAndVerify(root, nums, 0);
    // });
});

function deleteNodeAndVerify(root, nums, key) {
    bst.deleteNode(root, key);
    expectTreeToIncludeAllButOne(root, nums, key);
}

function expectTreeToIncludeAllButOne(root, nums, key) {
    const traversed = bst.inorderTraversal(root);

    for (const num of nums) {
        if (num !== key) {
            expect(traversed).toContain(num);
        } else {
            expect(traversed).not.toContain(num);
        }
    }
}
