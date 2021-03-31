function tabular(rows, cols) {
    const dp = [];
    for (let i = 0; i < rows; i++) {
        dp[i] = [];
        for (let j = 0; j < cols; j++) {
            dp[i][j] = 0;
        }
    }

    dp[0][0] = 1;

    for (let i = 0; i < rows; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i < cols; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[rows - 1][cols - 1];
}

function memoization(rows, cols, memo = {}) {
    if (rows === 0 || cols === 0) {
        return 0;
    }
    if (rows === 1 && cols === 1) {
        return 1;
    }

    if (memo[[rows, cols]]) {
        return memo[[rows, cols]];
    }
    memo[[rows, cols]] = memoization(rows - 1, cols, memo) + memoization(rows, cols - 1, memo);

    return memo[[rows, cols]];
}

/*console.log(memoization(2, 3));

console.log(tabular(2, 3));*/

const assert = require("assert");

for (let i = 0; i < 100; i++) {
    const input = [randInt(), randInt()];
    const memoizationResult = memoization(...input);
    const tabularResult = tabular(...input);

    assert.deepStrictEqual(memoizationResult, tabularResult);
}

function randInt() {
    const alpha = Math.random();
    const beta = alpha * 100;
    const gamma = Math.ceil(beta);
    return gamma;
}
