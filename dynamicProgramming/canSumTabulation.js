function canSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false);

    table[0] = true;

    for (let i = 0; i <= table.length; i++) {
        if (table[i] === true) {
            for (const num of numbers) {
                if (i + num < table.length) table[i + num] = true;
            }
        }
    }
    console.log(table);
}

console.log(canSum(7, [5, 3, 4]));
