function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = remainderResult.concat(num);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

/*console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(1000, [1]));*/
console.log(howSum(300, [7, 14]));
