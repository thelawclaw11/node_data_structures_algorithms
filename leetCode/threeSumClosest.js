const assert = require("assert");

function threeSumClosest(nums, target) {
    let diff = Infinity;
    const length = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < length; i++) {
        if (diff === 0) {
            return target;
        }

        let lo = i + 1;
        let hi = length - 1;

        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }
            if (sum < target) {
                lo++;
            } else {
                hi--;
            }
        }
    }
    return target - diff;
}

assert.deepStrictEqual(threeSumClosest([-1, 2, 1, -4], 1), 2);
assert.deepStrictEqual(threeSumClosest([1, 1, 1, 0], 100), 3);

console.log(threeSumClosest([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33], 0));
