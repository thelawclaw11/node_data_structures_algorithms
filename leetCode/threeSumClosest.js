function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((l + r) / 2);

    while (true) {
        const currentSum = nums[l] + nums[r] + nums[m];

        if (currentSum === target) {
            return currentSum;
        }

        if (currentSum > target) {
            const sumAfterMovingM = nums[l] + nums[m - 1] + nums[r];
            const sumAfterMovingR = nums[l] + nums[m] + nums[r - 1];
            const canMoveM = m - 1 > l;
            const canMoveR = r - 1 > m;

            const isSumAfterMovingMCloserToTarget =
                Math.abs(target - sumAfterMovingM) < Math.abs(target - sumAfterMovingR);

            if (
                Math.abs(target - currentSum) < Math.abs(target - sumAfterMovingM) &&
                Math.abs(target - currentSum) < Math.abs(target - sumAfterMovingR)
            ) {
                return currentSum;
            }

            if (canMoveM && isSumAfterMovingMCloserToTarget) {
                m--;
            } else if (canMoveR && !isSumAfterMovingMCloserToTarget) {
                r--;
            } else if (canMoveM && !canMoveR && Math.abs(target - sumAfterMovingM) < Math.abs(target - currentSum)) {
                m--;
            } else if (canMoveR && !canMoveM && Math.abs(target - sumAfterMovingR) < Math.abs(target - currentSum)) {
                r--;
            } else if (canMoveR && sumAfterMovingR === currentSum) {
                r--;
            } else if (canMoveM && sumAfterMovingM === currentSum) {
                m--;
            } else {
                return currentSum;
            }
        } else {
            const sumAfterMovingM = nums[l] + nums[m + 1] + nums[r];
            const sumAfterMovingL = nums[l + 1] + nums[m] + nums[r];
            const canMoveM = m + 1 < r;
            const canMoveL = l + 1 < m;

            const isSumAfterMovingMCloserToTarget =
                Math.abs(target - sumAfterMovingM) < Math.abs(target - sumAfterMovingL);

            if (
                Math.abs(target - currentSum) < Math.abs(target - sumAfterMovingM) &&
                Math.abs(target - currentSum) < Math.abs(target - sumAfterMovingL)
            ) {
                return currentSum;
            }

            if (canMoveM && isSumAfterMovingMCloserToTarget) {
                m++;
            } else if (canMoveL && !isSumAfterMovingMCloserToTarget) {
                l++;
            } else if (canMoveM && !canMoveL && Math.abs(target - sumAfterMovingM) < Math.abs(target - currentSum)) {
                m++;
            } else if (canMoveL && !canMoveM && Math.abs(target - sumAfterMovingL) < Math.abs(target - currentSum)) {
                l++;
            } else if (canMoveL && sumAfterMovingL === currentSum) {
                l++;
            } else if (canMoveM && sumAfterMovingM === currentSum) {
                m++;
            } else {
                return currentSum;
            }
        }
    }
}

const assert = require("assert");

// assert.deepStrictEqual(threeSumClosest([-1, 2, 1, -4], 1), 2);
// assert.deepStrictEqual(threeSumClosest([1, 1, 1, 0], 100), 3);

console.log(threeSumClosest([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33], 0));
