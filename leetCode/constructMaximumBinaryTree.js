const assert = require("assert");

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const constructMaximumBinaryTree = (nums) => {
    const F = (start, end) => {
        if (end - start === 1) {
            return new TreeNode(nums[start]);
        }

        if (start === end) {
            return null;
        }

        let maxIndex = start;

        for (let i = start; i < end; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }

        const node = new TreeNode(nums[maxIndex]);

        node.left = F(start, maxIndex);
        node.right = F(maxIndex + 1, end);

        return node;
    };

    return F(0, nums.length);
};

const mk1 = (nums) => {
    const F = (numbers) => {
        if (numbers.length === 1) {
            return new TreeNode(numbers[0]);
        }
        if (numbers.length === 0) {
            return null;
        }

        let maxIndex = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[maxIndex]) {
                maxIndex = i;
            }
        }

        const leftHalf = numbers.slice(0, maxIndex);
        const rightHalf = numbers.slice(maxIndex + 1);
        const node = new TreeNode(numbers[maxIndex]);

        node.left = F(leftHalf);
        node.right = F(rightHalf);

        return node;
    };

    return F(nums);
};

assert.deepStrictEqual(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]), mk1([3, 2, 1, 6, 0, 5]));

//console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
