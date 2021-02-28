function lengthOfLongestSubstring(string) {
    const map = new Map();

    let len = 0;
    let start = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);
        if (map.has(char)) {
            if (map.get(char) >= start) {
                start = map.get(char) + 1;
            }
        }
        len = Math.max(len, (i = start + 1));
        map.set(char, i);
    }

    return len;
}

console.log(lengthOfLongestSubstring(" "));

// const alpha = " ";
// console.log(alpha.charCodeAt(0));

// function lengthOfLongestSubstring(string) {
//     let longest = 0;
//
//     for (let i = 0; i < string.length; i++) {
//         const set = new Set();
//         let length = 0;
//         for (let j = i; j < string.length; j++) {
//             if (set.has(string.charCodeAt(j))) {
//                 break;
//             } else {
//                 set.add(string.charCodeAt(j));
//                 length++;
//             }
//         }
//         longest = Math.max(longest, length);
//     }
//     return longest;
// }
