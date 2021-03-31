const memo = {};
function fib(n) {
    if (memo[n]) {
        return memo[n];
    }

    if (n <= 2) {
        return 1;
    }
    memo[n] = fib(n - 1) + fib(n - 2);

    return memo[n];
}

function dynamicProgramming(n) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(dynamicProgramming(20));

console.log(fib(20));
