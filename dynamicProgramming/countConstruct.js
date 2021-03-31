function countConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

//console.log("abcdef".slice(3));

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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
