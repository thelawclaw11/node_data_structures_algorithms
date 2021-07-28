function fib(n, memo = {}) {
    if (memo[n]) {
        return memo[n];
    }

    if (n <= 2) {
        return 1;
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

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

function usingStack(n) {
    const stack = [n];
    let answer = 0;

    while (stack.length > 0) {
        const current = stack.pop();
        if (current <= 2) {
            answer += 1;
        } else {
            stack.push(current - 1);
            stack.push(current - 2);
        }
    }
    return answer;
}

console.time("stack");
console.log(usingStack(30));
console.timeEnd("stack");

console.time("table");
console.log(dynamicProgramming(30));
console.timeEnd("table");
