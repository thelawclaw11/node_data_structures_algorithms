function canConstruct(targetString, wordBank) {
    const table = Array(targetString.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            for (const word of wordBank) {
                if (targetString.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[table.length - 1];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
