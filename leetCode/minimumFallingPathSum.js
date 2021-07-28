function minFallingPathSum(dp) {
    const n = dp.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                dp[i][j] = dp[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
            } else if (j === n - 1) {
                dp[i][j] = dp[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
            } else {
                dp[i][j] = dp[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]);
            }
        }
    }

    let min = Infinity;

    for (let i = 0; i < n; i++) {
        min = Math.min(dp[n - 1][i], min);
    }

    return min;
}

console.log(
    minFallingPathSum([
        [2, 1, 3],
        [6, 5, 4],
        [7, 8, 9],
    ])
);

// function minFallingPathSum(matrix) {
//     const n = matrix.length;
//
//     const memo = Array(n)
//         .fill(0)
//         .map(() => Array(n).fill(null));
//
//     function F(row, col) {
//         if (col < 0 || col >= n) {
//             return Infinity;
//         }
//
//         if (memo[row][col] !== null) {
//             return memo[row][col];
//         }
//
//         if (row === 0) {
//             const result = matrix[row][col];
//             memo[row][col] = result;
//             return result;
//         }
//
//         const result = matrix[row][col] + Math.min(F(row - 1, col - 1), F(row - 1, col), F(row - 1, col + 1));
//
//         memo[row][col] = result;
//
//         return result;
//     }
//
//     let min = Infinity;
//
//     for (let i = 0; i < n; i++) {
//         const result = F(n - 1, i);
//         min = Math.min(result, min);
//     }
//     return min;
// }

function mk1(matrix) {
    const n = matrix.length;
    let min = Infinity;

    function F(row, col, accum) {
        if (col < 0 || col >= n) {
            return;
        }

        const current = matrix[row][col];
        if (row === n - 1) {
            min = Math.min(accum + current, min);
            return;
        }

        F(row + 1, col - 1, accum + current);
        F(row + 1, col, accum + current);
        F(row + 1, col + 1, accum + current);
    }

    for (let i = 0; i < n; i++) {
        F(0, i, 0);
    }

    return min;
}
