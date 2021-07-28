// function minCostClimbingStairs(costs) {
//     const memo = {};
//
//     function traverse(currentIndex) {
//         if (currentIndex <= 1) {
//             return 0;
//         }
//
//         if (currentIndex in memo) {
//             return memo[currentIndex];
//         }
//
//         const result = Math.min(
//             traverse(currentIndex - 1) + costs[currentIndex - 1],
//             traverse(currentIndex - 2) + costs[currentIndex - 2]
//         );
//
//         memo[currentIndex] = result;
//
//         return result;
//     }
//
//     return traverse(costs.length);
// }

function minCostClimbingStairs(costs) {
    const dp = Array(costs.length + 1).fill(0);

    for (let i = 2; i <= costs.length; i++) {
        dp[i] = Math.min(dp[i - 1] + costs[i - 1], dp[i - 2] + costs[i - 2]);
    }
    return dp[costs.length];
}

console.log(minCostClimbingStairs([10, 15, 20]));
//console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// console.time();
// console.log(
//     minCostClimbingStairs([
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         841,
//         462,
//         566,
//         398,
//         243,
//         248,
//         238,
//         650,
//         989,
//         576,
//         361,
//         126,
//         334,
//         729,
//         446,
//         897,
//         953,
//         38,
//         195,
//         679,
//         713,
//         900,
//         137,
//         70,
//         912,
//         51,
//         250,
//     ])
// ); //5295
// console.timeEnd();
