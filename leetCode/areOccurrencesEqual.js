const areOccurrencesEqual = (s) => {
    const table = {};

    for (const char of s) {
        if (char in table) {
            table[char]++;
        } else {
            table[char] = 1;
        }
    }

    let count = table[s[0]];

    for (const char in table) {
        if (table[char] !== count) {
            return false;
        }
    }

    return true;
};
