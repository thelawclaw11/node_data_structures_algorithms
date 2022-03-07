const search = (nums, target) => {
    const F = (left, right) => {
        if (left > right) {
            return -1;
        }

        const mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        if (target > nums[mid]) {
            return F(mid + 1, right);
        }

        if (target < nums[mid]) {
            return F(left, mid - 1);
        }
    };

    return F(0, nums.length - 1);
};

module.exports = search;
