const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

function howSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (const num of numbers) {
                if (i + num < table.length) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }

    prettyPrint(table);
    return table[targetSum];
}

console.log(howSum(7, [5, 3, 4]));
console.log(howSum(300, [7, 14]));
