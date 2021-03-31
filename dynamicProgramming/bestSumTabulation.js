const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < table.length; i++) {
        if (table[i] !== null) {
            for (const num of numbers) {
                if (i + num < table.length) {
                    if (table[i + num] === null || table[i].length + 1 < table[i + num].length) {
                        table[i + num] = table[i].concat(num);
                    }
                }
            }
        }
    }

    return table[targetSum];
}

console.log(bestSum(8, [2, 3, 5]));

console.log(bestSum(100, [1, 2, 5, 25]));
