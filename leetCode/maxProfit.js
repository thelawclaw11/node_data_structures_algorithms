function bruteForce(prices) {
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            max = Math.max(prices[j] - prices[i], max);
        }
    }
    return max;
}

function maxProfit(prices) {
    if (prices.length === 1) {
        return 0;
    }
    if (prices.length === 2) {
        return Math.max(0, prices[1] - prices[0]);
    }

    let result = Math.max(0, prices[1] - prices[0]);

    let minSeen = Math.min(prices[1], prices[0]);

    for (let i = 2; i < prices.length; i++) {
        result = Math.max(result, prices[i] - minSeen);
        minSeen = Math.min(minSeen, prices[i]);
    }
    return Math.max(0, result);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
