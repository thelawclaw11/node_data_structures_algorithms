function searchInsert(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let current;

    while (min <= max) {
        current = Math.floor((min + max) / 2);

        if (nums[current] < target) {
            min = current + 1;
        } else if (nums[current] > target) {
            max = current - 1;
        } else {
            return current;
        }
    }

    if (target > nums[current]) {
        return current + 1;
    } else {
        return current;
    }
}

module.exports = searchInsert;

//console.log(searchInsert([1, 3, 4, 5], 5));
//console.log(searchInsert([1, 3, 4, 5], 2)); //expect to be 1
