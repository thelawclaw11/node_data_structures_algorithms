/*
function allSum(target, numbers) {
    const dp = Array(target + 1)
        .fill()
        .map(() => []);

    for (let i = 0; i < ; i++) {
        
    }

    dp[0] = [[]];

    for (let i = 0; i < target; i++) {
        if (dp[i].length > 0) {
            for (const num of numbers) {
                if (i + num < target) {
                    const ways = dp[i].map((way) => [...way, num]);
                    dp[i + num].push(...ways);
                }
            }
        }
    }
    //console.table(dp);
    console.log(dp);

    return dp[target];
}

console.log(allSum(8, [5, 3, 2]));
*/
