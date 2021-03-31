// function maxSubArray(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//
//     let maxSeen = nums[0];
//     const dp = [];
//     dp[0] = nums[0];
//
//     for (let i = 1; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
//         maxSeen = Math.max(dp[i], maxSeen);
//     }
//
//     return maxSeen;
// }

//console.log(maxSubArray([-1, -2]));

//memoization

// function maxSubArray(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     const memo = [nums[0]];
//
//     function inner(i) {
//         if (memo[i] !== undefined) {
//             return memo[i];
//         }
//
//         const result = Math.max(inner(i - 1) + nums[i], nums[i]);
//         memo[i] = result;
//         return result;
//     }
//
//     inner(nums.length - 1);
//
//     return Math.max(...memo);
// }

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//optimized

// function maxSubArray(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     let maxSeen = nums[0];
//     let alpha = nums[0];
//     let beta;
//
//     for (let i = 1; i < nums.length; i++) {
//         beta = Math.max(alpha + nums[i], nums[i]);
//         maxSeen = Math.max(beta, maxSeen);
//         alpha = beta;
//     }
//
//     return maxSeen;
// }
