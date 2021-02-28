function threeSum(rawNums) {
    const table = new Map();

    for (const num of rawNums) {
        if (table.has(num)) {
            table.set(num, table.get(num) + 1);
        } else {
            table.set(num, 1);
        }
    }

    const nums = [];

    for (const num of table.keys()) {
        nums.push(num);
    }

    nums.sort((a, b) => a - b);

    const triplets = [];

    let L = 0;
    let R = nums.length - 1;

    while (nums[L] <= 0) {
        let l = L + 1;
        let r = R;

        const current = nums[L];
        const target = current * -1;

        if (current !== 0) {
            if (table.get(current) > 1 && table.get(current * -2)) {
                triplets.push([current, current, current * -2]);
            }

            if (table.get(current * -0.5) > 1) {
                triplets.push([current, current * -0.5, current * -0.5]);
            }
        } else {
            if (table.get(0) > 2) {
                triplets.push([0, 0, 0]);
            }
        }

        while (l < r) {
            if (nums[l] + nums[r] === target) {
                triplets.push([current, nums[l], nums[r]]);
                r--;
                l++;
            } else if (nums[l] + nums[r] > target) {
                r--;
            } else if (nums[l] + nums[r] < target) {
                l++;
            }

            if (current * -2 > nums[r - 1] && current * -2 <= nums[r]) {
                R = r;
            }
        }

        L++;
    }
    return triplets;
}
// console.log(threeSum([-2, 0, 0, 2, 2]));
//console.log(threeSum([-5, -4, -3, -2, -1, 0, 0, 0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33]));
