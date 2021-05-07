const bst = require("./BinarySearchTree");

describe("sameTree", () => {
    it("one", () => {
        const nums = [5, 2, 7, 1, 3, 6, 8];
        const left = bst.newRootFromArray(nums);
        const right = bst.newRootFromArray(nums);

        expect(bst.isSameTree(left, right)).toBe(true);
    });
    it("two", () => {
        const nums = [5, 2, 7, 1, 3, 6, 8];
        const left = bst.newRootFromArray(nums);
        const right = bst.newRootFromArray([...nums, 0]);

        expect(bst.isSameTree(left, right)).toBe(false);
    });
});
