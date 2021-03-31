function convertToLetters(digit) {
    const table = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    return table[digit];
}

function letterCombinations(digits) {
    if (digits === "") return [];
    const letters = [];

    for (const char of digits) {
        letters.push(convertToLetters(char));
    }

    const combinations = [];

    const backTrack = (accum, start) => {
        if (start === letters.length) {
            combinations.push([...accum].join(""));
            return;
        }
        for (const char of letters[start]) {
            accum.push(char);
            backTrack(accum, start + 1);
            accum.pop();
        }
    };

    backTrack([], 0);

    return combinations;
}

console.log(letterCombinations("23"));
