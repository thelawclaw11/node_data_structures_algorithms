function countConstruct(targetString, wordBank) {
    const table = Array(targetString.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i < table.length; i++) {
        for (const word of wordBank) {
            if (targetString.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[targetString.length];
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
