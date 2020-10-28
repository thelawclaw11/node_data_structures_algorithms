function maximumSum(array, mod) {
    // const a = a.map(num => num % m)

    const length = array.length;

    const dp = Array(length);
    for (let i = 0; i < length; i++) {
        dp[i] = Array(length).fill(0);
    }

    dp[0][0] = array[0];

    let max = -Infinity;

    for (let j = 1; j < length; j++) {
        dp[0][j] = array[j] + dp[0][j - 1];

        const modded = dp[0][j] % mod;

        if (modded > max) {
            max = modded;
        }
    }

    for (let i = 1; i < length; i++) {
        for (let j = i; j < length; j++) {
            dp[i][j] = dp[i][j - 1] + (dp[i - 1][j] - dp[i - 1][j - 1]);

            const modded = dp[i][j] % mod;

            if (modded > max) {
                max = modded;
            }
        }
    }

    return max;
}

module.exports = maximumSum;
