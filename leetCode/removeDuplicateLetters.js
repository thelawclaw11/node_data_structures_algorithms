const removeDuplicateLetters = () => {};

//abc
console.log(removeDuplicateLetters("bcabc"));

//acdb
console.log(removeDuplicateLetters("cbacdcbc"));

//abc
console.log(removeDuplicateLetters("abacb"));

// const dontWork = (string) => {
//     let result = "";
//     const set = new Set();
//
//     for (let i = string.length - 1; i >= 0; i--) {
//         if (set.has(string[i])) {
//             if (string[i] < result[0]) {
//                 result = string[i] + result.replace(string[i], "");
//             }
//         } else {
//             set.add(string[i]);
//             result = string[i] + result;
//         }
//     }
//     return result;
// };
