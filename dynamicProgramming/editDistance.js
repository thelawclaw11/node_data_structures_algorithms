function minDistance(x, y) {
    const dp = Array(x.length + 1)
        .fill()
        .map(() => []);

    for (let i = 0; i <= x.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= y.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= x.length; i++) {
        for (let j = 1; j <= y.length; j++) {
            if (x[i - 1] === y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return dp[x.length][y.length];
}

// var minDistance = function(word1, word2) {
//     const dp = Array(word1.length + 1).fill().map(() => [])
//
//     for (let i = 0 ; i <= word1.length; i++) {
//         dp[i][0] = i
//     }
//
//     for (let i = 0 ; i <= word2.length; i++) {
//         dp[0][i] = i
//     }
//
//     for (let i = 1 ; i <= word1.length; i++) {
//         for (let j = 1 ; j <= word2.length; j++) {
//             if (word1[i - 1] === word2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1]
//             } else {
//                 dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
//             }
//         }
//     }
//
//     return dp[word1.length][word2.length]
// };
// function minDistance(a, b) {
//     if (a.length == 0) return b.length;
//     if (b.length == 0) return a.length;
//
//     var matrix = [];
//
//     // increment along the first column of each row
//     var i;
//     for (i = 0; i <= b.length; i++) {
//         matrix[i] = [i];
//     }
//
//     // increment each column in the first row
//     var j;
//     for (j = 0; j <= a.length; j++) {
//         matrix[0][j] = j;
//     }
//
//     // Fill in the rest of the matrix
//     for (i = 1; i <= b.length; i++) {
//         for (j = 1; j <= a.length; j++) {
//             if (b.charAt(i - 1) == a.charAt(j - 1)) {
//                 matrix[i][j] = matrix[i - 1][j - 1];
//             } else {
//                 matrix[i][j] = Math.min(
//                     matrix[i - 1][j - 1] + 1, // substitution
//                     Math.min(
//                         matrix[i][j - 1] + 1, // insertion
//                         matrix[i - 1][j] + 1
//                     )
//                 ); // deletion
//             }
//         }
//     }
//
//     return matrix[b.length][a.length];
// }

// function minDistance(x, y) {
//     const memo = Array(x.length)
//         .fill(null)
//         .map(() => Array(y.length).fill(null));
//
//     const recurse = (xPointer, yPointer) => {
//         if (xPointer === x.length) {
//             return y.length - yPointer;
//         }
//
//         if (yPointer === y.length) {
//             return x.length - xPointer;
//         }
//
//         if (memo[xPointer] && memo[xPointer][yPointer] !== null) {
//             return memo[xPointer][yPointer];
//         }
//
//         if (x[xPointer] === y[yPointer]) {
//             return recurse(xPointer + 1, yPointer + 1);
//         }
//
//         const costToReplace = recurse(xPointer + 1, yPointer + 1);
//         const costToInsert = recurse(xPointer, yPointer + 1);
//         const costToDelete = recurse(xPointer + 1, yPointer);
//
//         let cost = 1 + Math.min(costToDelete, costToReplace, costToInsert);
//
//         memo[xPointer][yPointer] = cost;
//
//         return cost;
//     };
//
//     const result = recurse(0, 0);
//
//     return result;
// }

module.exports = minDistance;
