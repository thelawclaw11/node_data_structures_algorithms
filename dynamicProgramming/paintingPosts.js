function numWays(n) {
    const dp = Array(n + 2);
    for (let i = 0; i < n + 2; i++) {
        dp[i] = Array(2).fill(0);
    }

    dp[0][0] = 0;
    dp[0][0] = 0;
    dp[1][0] = 1;
    dp[1][1] = 1;
    dp[2][0] = 2;
    dp[2][1] = 2;

    for (let i = 3; i <= n; i++) {
        for (let j = 0; j <= 1; j++) {
            dp[i][j] = dp[i - 1][1 - j] + dp[i - 2][1 - j];
        }
    }

    console.table(dp);

    return dp[n][0] + dp[n][1];
}

console.log(numWays(4));
