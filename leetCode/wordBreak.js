function wordBreak(s, words) {
    const memo = Array(s.length).fill(null);

    const F = (i) => {
        if (i < 0) {
            return true;
        }

        if (memo[i] !== null) {
            return memo[i];
        }

        let result = false;

        for (const word of words) {
            const slice = s.slice(i + 1 - word.length, i + 1);

            if (slice === word) {
                const res = F(i - word.length);
                if (res === true) {
                    return true;
                }
            }
        }

        memo[i] = result;

        return result;
    };
    return F(s.length - 1);
}

// const s = "applepenapple";
//
// console.log(s.slice(13 - 5, 13));
// console.log();
// console.log(
//     wordBreak(
//         "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//         [
//             "a",
//             "aa",
//             "aaa",
//             "aaaa",
//             "aaaaa",
//             "aaaaaa",
//             "aaaaaaa",
//             "aaaaaaaa",
//             "aaaaaaaaa",
//             "aaaaaaaaaa",
//         ]
//     )
// );

// console.log(wordBreak("a", ["b"]));

console.log(wordBreak("applepenapple", ["apple", "pen"]));

function mk1(s, words) {
    const F = (remainder) => {
        if (remainder.length === 0) {
            return true;
        }

        let result = false;

        for (const word of words) {
            if (result === true) {
                return true;
            }
            if (remainder.endsWith(word)) {
                const res = F(remainder.slice(0, remainder.length - word.length));
                if (res === true) {
                    {
                        result = true;
                    }
                }
            }
        }
        return result;
    };

    return F(s);
}
