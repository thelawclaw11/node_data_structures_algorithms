function coinChange(numbers, target) {
    const result = backtrack(numbers, target, 0);

    return result;
}

function backtrack(numbers, target, accum) {
    if (target === 0) return 1;

    if (target < 0) return 0;

    let shortest = Infinity;

    for (const num of numbers) {
        const remainderShortest = backtrack(numbers, target - num, accum + 1);
        //console.log(remainderShortest);
        if (remainderShortest < shortest) {
            shortest = remainderShortest;
        }
    }

    return shortest;
}

console.log(coinChange([2, 3, 5], 8));
