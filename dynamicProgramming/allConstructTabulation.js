function allConstruct(target, words) {
    const table = Array(target.length + 1)
        .fill(null)
        .map(() => []);
    table[0].push("");

    for (let i = 0; i < table.length; i++) {
        if (table[i].length > 0) {
            for (const word of words) {
                if (i + word.length < table.length) {
                    if (target.slice(i, i + word.length) === word) {
                        const combinations = table[i].map((combination) => [...combination, word]);
                        table[i + word.length].push(...combinations);
                    }
                }
            }
        }
    }

    return table[target.length];
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));

/*
console.log(
    allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
        "eeeeeee",
        "eeeeeeee",
        "eeeeeeeeee",
    ])
);
*/
