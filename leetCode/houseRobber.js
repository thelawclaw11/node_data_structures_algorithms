function rob(numbers) {
    const memo = {};

    function F(i) {
        if (i in memo) {
            return memo[i];
        }

        if (i < 0) {
            return 0;
        }

        if (i === 0) {
            return numbers[0];
        }

        const result = Math.max(F(i - 1), numbers[i] + F(i - 2));

        memo[i] = result;

        return result;
    }

    return F(numbers.length - 1);
}

console.log(rob([2, 7, 9, 3, 1]));

function rob(numbers) {
    const dp = Array(numbers).fill(0);
    dp[0] = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        dp[i] = Math.max(dp[i - 1], numbers[i] + (i - 2 < 0 ? 0 : dp[i - 2]));
    }
    return dp[numbers.length - 1];
}
