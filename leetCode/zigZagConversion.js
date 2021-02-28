function convert(s, numRows) {
    const resultRows = new Array(numRows).fill("");
    let currentIndex = 0;

    while (currentIndex < s.length) {
        for (let i = 0; i < numRows && currentIndex < s.length; i++) {
            resultRows[i] += s[currentIndex];
            currentIndex++;
        }
        for (let i = numRows - 1; i > 0 && currentIndex < s.length; i--) {
            resultRows[i] += s[currentIndex];
            currentIndex++;
        }
    }
    return resultRows.join("");
}
console.log(convert("CANONISTHEBEST", 4));
console.log(convert("ABCDE", 4));

// function convert(s, numRows) {
//     if (numRows === 1) {
//         return s;
//     }
//
//     const maxZagCount = numRows - 2;
//
//     const lines = [];
//     const zags = [];
//
//     let i = 0;
//     while (i < s.length) {
//         lines.push(s.substr(i, numRows));
//         i += numRows;
//         zags.push(s.substr(i, numRows - 2));
//         i += numRows - 2;
//     }
//     // console.log(lines);
//     // console.log(zags);
//
//     const result = [];
//
//     for (let k = 0; k < lines[0].length; k++) {
//         for (let j = 0; j < lines.length; j++) {
//             if (lines[j][k]) {
//                 result.push(lines[j][k]);
//             }
//             if (k > 0 && k < numRows - 1 && zags[j] && zags[j] && zags[j][maxZagCount - 1 - (k - 1)]) {
//                 result.push(zags[j][maxZagCount - 1 - (k - 1)]);
//             }
//         }
//     }
//     // console.log(result);
//     return result.join("");
// }
