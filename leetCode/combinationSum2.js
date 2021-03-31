function combinationSum2(numbers, target) {
    const results = [];
    const table = {};

    for (const num of numbers) {
        if (num in table) {
            table[num]++;
        } else {
            table[num] = 1;
        }
    }

    const counter = Object.entries(table).map(([key, value]) => [Number(key), Number(value)]);

    function backtrack(comb, remain, curr) {
        if (remain === 0) {
            results.push([...comb]);
            return;
        } else if (remain < 0) {
            return;
        }

        for (let i = curr; i < counter.length; i++) {
            const [candidate, freq] = counter[i];

            if (freq <= 0) {
                continue;
            }

            comb.push(candidate);
            counter[i] = [candidate, freq - 1];

            backtrack(comb, remain - candidate, i);

            counter[i] = [candidate, freq];
            comb.pop();
        }
    }

    backtrack([], target, 0);

    return results;
}

console.log(combinationSum2([1, 2, 7, 6, 1, 5], 8));

// function combinationSum2(numbers, target) {
//     numbers.sort((a, b) => a - b);
//
//     const combinations = [];
//
//     backtrack(numbers, target, 0, [], combinations);
//     return combinations;
// }
//
// function backtrack(numbers, target, start, accum, combinations) {
//     if (start > numbers.length) {
//         return;
//     }
//     if (target === 0) {
//         combinations.push([...accum]);
//         return;
//     }
//
//     for (let i = start; i < numbers.length; i++) {
//         if (i > start && numbers[i] === numbers[i - 1]) continue;
//
//         if (target - numbers[i] < 0) break;
//
//         accum.push(numbers[i]);
//         backtrack(numbers, target - numbers[i], i + 1, accum, combinations);
//         accum.pop();
//     }
// }
