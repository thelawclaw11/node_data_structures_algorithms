function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return true;

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

//console.log("abcdef".slice(3));

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
/*
console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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
