function coinChange(n, coins) {
    const dp = Array(n + 1)
        .fill(0)
        .map((row) => Array(coins.length).fill(0));

    for (let i = 0; i < coins.length; i++) {
        dp[0][i] = 1;
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < coins.length; j++) {
            for (let k = 0; k <= j; k++) {
                if (i - coins[k] < 0) {
                    continue;
                }
                dp[i][j] += dp[i - coins[k]][k];
            }
        }
    }

    return dp[n][coins.length - 1];
}
console.log(coinChange(8, [5, 3, 2]));
