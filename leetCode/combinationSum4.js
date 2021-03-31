/*function combinationSum4(numbers, target) {
    const memo = new Map();

    return backtrack(numbers, target, memo);
}

function backtrack(numbers, target, memo) {
    if (memo.has(target)) return memo.get(target);
    if (target === 0) {
        return 1;
    }

    if (target < 0) return 0;

    let sum = 0;

    for (const num of numbers) {
        sum += backtrack(numbers, target - num, memo);
    }

    memo.set(target, sum);
    return sum;
}*/

/*function combinationSum4(numbers, target) {
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
}*/

console.log(combinationSum4([3, 2, 1], 4));

//console.log(combinationSum4([2, 1, 3, 4, 5, 6, 8, 9, 19, 11, 12, 13, 14, 15, 16], 1000));
