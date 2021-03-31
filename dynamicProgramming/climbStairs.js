function memoization(n, memo = {}) {
    if (n in memo) return memo[n];

    if (n === 1 || n === 0) return 1;
    if (n < 0) return 0;

    memo[n] = memoization(n - 1, memo) + memoization(n - 2, memo);

    return memo[n];
}

function tabulation(n) {
    const table = Array(n + 1);
    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

function tabulationOptimized(n) {
    let prev = 1;
    let current = 1;
    let i = 2;

    let t;

    while (i <= n) {
        t = prev + current;
        prev = current;
        current = t;
        i++;
    }
    return current;
}

console.log(tabulationOptimized(5));
