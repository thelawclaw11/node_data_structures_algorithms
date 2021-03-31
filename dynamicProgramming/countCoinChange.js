function countCoinChange(target, coins) {
    const dp = Array(coins.length + 1)
        .fill()
        .map(() => Array(target + 1));

    console.table(dp);
}

console.log(countCoinChange(5, [1, 2, 5]));
