function subarraySum(nums, k) {
    let count = 0;

    const table = new Map();

    let currentSum = 0;
    for (const n of nums) {
        currentSum += n;

        const targetPrefix = currentSum - k;

        if (currentSum === k) {
            count++;
        }
        //console.log(currentSum, targetPrefix);
        if (table.has(targetPrefix)) {
            count += table.get(targetPrefix);
        }

        if (table.has(currentSum)) {
            table.set(currentSum, table.get(currentSum) + 1);
        } else {
            table.set(currentSum, 1);
        }
    }
    //console.log(table);

    return count;
}

module.exports = subarraySum;

//CORRECT BUT SLOW
function mk1(nums, k) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            if (currentSum === k) {
                total++;
            }
        }
    }
    return total;
}
