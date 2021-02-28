function twoSum(nums, target) {
    const table = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (table.has(nums[i])) {
            return [table.get(nums[i]), i];
        }
        table.set(target - nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));

// function twoSum(nums, target) {
//     const table = new Map();
//
//     for (let i = 0; i < nums.length; i++) {
//         table.set(nums[i], i);
//     }
//
//     let result;
//
//     for (let i = 0; i < nums.length; i++) {
//         const addend = target - nums[i];
//         if (table.has(addend) && table.get(addend) !== i) {
//             result = [i, table.get(addend)];
//         }
//     }
//     return result;
// }
