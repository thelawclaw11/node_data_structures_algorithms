// function maxProfit(prices) {
//     const dp = Array(prices.length).fill(0);
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(prices.length).fill(0);
//     }
//
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             dp[i][j] = prices[j] - prices[i];
//         }
//     }
//
//     let result = 0;
//
//     let i = dp.length - 2;
//     let j = dp.length - 1;
//
//     while (i >= 0 && j > 0) {
//         //console.log(dp[i][j]);
//         result += Math.max(0, dp[i][j]);
//         i--;
//         j--;
//     }
//
//     //console.table(dp);
//     return result;
// }

// function maxProfit(prices) {
//     let total = 0;
//     let left = 0;
//     let right = 1;
//     while (left < prices.length && right < prices.length) {
//         const leftPrice = prices[left];
//         const rightPrice = prices[right];
//         if (rightPrice > leftPrice) {
//             total += rightPrice - leftPrice;
//             left = right;
//             right = left + 1;
//         } else {
//             left = right;
//             right = left + 1;
//         }
//     }
//     return total;
// }
function maxProfit(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            total += prices[i] - prices[i - 1];
        }
    }

    return total;
}

//console.log(maxProfit([1, 7, 6, 5, 10]));
//console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
