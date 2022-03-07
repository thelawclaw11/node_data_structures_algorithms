const integerBreak = (n) => {
    const dp = Array(n + 1).fill(null);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (i - j >= 0) {
                dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
            }
        }
    }
    return dp[n];
};

// console.log(integerBreak(2));

module.exports = integerBreak;

const recursiveSolution = (n) => {
    const memo = Array(n + 1).fill(null);
    memo[0] = 1;

    const F = (remainder) => {
        if (remainder < 0) {
            return 0;
        }

        if (memo[remainder] !== null) {
            return memo[remainder];
        }

        let max = -Infinity;

        for (let x = 1; x < n; x++) {
            const result = x * F(remainder - x);
            max = Math.max(result, max);
        }
        memo[remainder] = max;

        return max;
    };
    return F(n);
};
