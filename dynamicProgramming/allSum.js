function allSum(target, numbers) {
    const dp = Array(target + 1)
        .fill()
        .map(() => []);

    dp[0] = [[]];

    for (let i = 0; i < dp.length; i++) {
        for (let k = 0; k <= numbers.length; k++) {
            const num = numbers[k];
            if (i - num >= 0) {
                const ways = dp[i - num].map((way) => [...way, num]);
                dp[i].push(...ways);
            }
        }
    }

    return dp[target];
}

console.log(allSum(8, [5, 3, 2]));
