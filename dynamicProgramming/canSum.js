function recursive(targetSum, numbers, memo = {}) {
    if (memo[targetSum]) return memo[targetSum];
    if (targetSum === 0) {
        return true;
    }

    if (targetSum < 0) {
        return false;
    }

    for (const num of numbers) {
        const remainder = targetSum - num;

        if (recursive(remainder, numbers) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

/*console.log(recursive(7, [5, 3, 4, 7]));
console.log(recursive(7, [2, 4]));*/

console.log(
    recursive(1000, [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
    ])
);
