function alpha(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 5;
    dp[1] = 8;

    for (let i = 2; i <= n; i++) {
        dp[i] = 3 * dp[i - 1] + 4 * dp[i - 2];
    }
    return dp[n];
}

function alphaClosed(n) {
    const a = 13 / 5;
    const b = 12 / 5;

    return a * Math.pow(4, n) + b * Math.pow(-1, n);
}

// console.log(alpha(20));
// console.log(alphaClosed(20));
