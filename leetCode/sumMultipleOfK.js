function checkSubarraySum(nums, k) {
    const map = new Map();

    map.set(0, -1);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = (nums[i] + sum) % k;

        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }
    return false;
}

console.log(5 % 0);

module.exports = checkSubarraySum;

function mk1(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let currentSum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            currentSum = (currentSum + nums[j]) % k;
            if (currentSum % k === 0) {
                return true;
            }
        }
    }
    return false;
}
