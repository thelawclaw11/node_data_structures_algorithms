function isMatch(string, pattern) {
    const memo = {};

    function traverse(stringIndex, patternIndex) {
        const key = `${stringIndex},${patternIndex}`;
        if (key in memo) {
            return memo[key];
        }
        if (stringIndex >= string.length && patternIndex >= pattern.length) {
            return true;
        }

        const char = string[stringIndex];

        let isValid = false;

        const isSameChar = char !== undefined && (pattern[patternIndex] === char || pattern[patternIndex] === ".");

        if (pattern[patternIndex + 1] === "*") {
            if (isSameChar) {
                isValid = isValid || traverse(stringIndex + 1, patternIndex);
            }

            isValid = isValid || traverse(stringIndex, patternIndex + 2);
        } else {
            if (isSameChar) {
                isValid = isValid || traverse(stringIndex + 1, patternIndex + 1);
            }
        }

        memo[key] = isValid;
        return isValid;
    }

    return traverse(0, 0);
}

// console.log(isMatch("canon", "c.non"));
//console.log(isMatch("aa", "a*"));
// console.log(isMatch("mississippi", "mis*is*p*."));

module.exports = isMatch;

// function isMatch(string, pattern) {
//     const memo = {};
//
//     function traverse(stringIndex, patternIndex) {
//         const key = `${stringIndex},${patternIndex}`;
//         if (key in memo) {
//             return memo[key];
//         }
//         if (stringIndex >= string.length && patternIndex >= pattern.length) {
//             return true;
//         }
//
//         const char = string[stringIndex];
//
//         let isValid = false;
//
//         if (pattern[patternIndex + 1] === "*") {
//             if (char !== undefined && (pattern[patternIndex] === char || pattern[patternIndex] === ".")) {
//                 const result = traverse(stringIndex + 1, patternIndex);
//
//                 if (result === true) {
//                     isValid = true;
//                 }
//             }
//
//             const result = traverse(stringIndex, patternIndex + 2);
//             if (result === true) {
//                 isValid = true;
//             }
//         } else {
//             if (pattern[patternIndex] === "." && char !== undefined) {
//                 const result = traverse(stringIndex + 1, patternIndex + 1);
//
//                 if (result === true) {
//                     isValid = true;
//                 }
//             }
//
//             if (pattern[patternIndex] === char && char !== undefined) {
//                 const result = traverse(stringIndex + 1, patternIndex + 1);
//                 if (result === true) {
//                     isValid = true;
//                 }
//             }
//         }
//
//         memo[key] = isValid;
//         return isValid;
//     }
//
//     return traverse(0, 0);
// }
