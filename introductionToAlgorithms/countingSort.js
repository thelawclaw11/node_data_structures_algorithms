const countingSort = (nums) => {
    const uniqueElements = new Set(nums);

    const counts = Array(uniqueElements.size).fill(0);
    console.log(counts);

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]]++;
    }
    console.table(counts);
};

module.exports = countingSort;
