function memoized(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return 1;
    if (target < 0) return 0;

    let numWays = 0;
    for (const num of numbers) {
        numWays += memoized(target - num, numbers, memo);
    }
    memo[target] = numWays;
    return numWays;
}

function tabulation(target, numbers) {
    const table = Array(target + 1).fill(0);

    table[0] = 1;

    for (let i = 0; i < table.length; i++) {
        for (const num of numbers) {
            if (i - num >= 0) {
                table[i] += table[i - num];
            }
        }
    }
    return table[target];
}

console.log(tabulation(50, [1, 3, 5, 10]));

console.log(memoized(50, [1, 3, 5, 10]));
