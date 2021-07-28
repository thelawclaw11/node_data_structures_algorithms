function rob(houses) {}

function helper(numbers) {
    const dp = Array(numbers).fill(0);
    dp[0] = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        dp[i] = Math.max(dp[i - 1], numbers[i] + (i - 2 < 0 ? 0 : dp[i - 2]));
    }
    return dp[numbers.length - 1];
}
