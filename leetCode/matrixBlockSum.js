function matrixBlockSum(matrix, k) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const dp = makeDp(matrix, numRows, numCols);

    const answer = Array(numRows)
        .fill(null)
        .map(() => Array(numCols).fill(0));

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const alphaRow = row + Math.min(k, numRows - row - 1);
            const alphaCol = col + Math.min(k, numCols - col - 1);

            answer[row][col] += dp[alphaRow][alphaCol];

            const gammaCol = alphaCol - (k + 1 + alphaCol - col);

            if (dp[alphaRow][gammaCol] !== undefined) {
                answer[row][col] -= dp[alphaRow][gammaCol];
            }

            const deltaRow = alphaRow - (k + 1 + alphaRow - row);

            if (dp[deltaRow] !== undefined) {
                answer[row][col] -= dp[deltaRow][alphaCol];
            }

            if (dp[alphaRow][gammaCol] !== undefined && dp[deltaRow] !== undefined) {
                answer[row][col] += dp[deltaRow][gammaCol];
            }
        }
    }

    // console.table(dp);

    return answer;
}

function makeDp(matrix, numRows, numCols) {
    const dp = Array(numRows)
        .fill(null)
        .map(() => Array(numCols).fill(0));

    dp[0][0] = matrix[0][0];

    for (let row = 1; row < numRows; row++) {
        dp[row][0] = dp[row - 1][0] + matrix[row][0];
    }

    for (let col = 1; col < numCols; col++) {
        dp[0][col] = dp[0][col - 1] + matrix[0][col];
    }

    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            dp[row][col] = matrix[row][col] + dp[row - 1][col] + dp[row][col - 1] - dp[row - 1][col - 1];
        }
    }
    return dp;
}

module.exports = matrixBlockSum;

function mk1(matrix, radius) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const table = Array(numRows)
        .fill(null)
        .map(() => Array(numCols).fill(0));

    const array = [];

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            array.push({ row, col, value: matrix[row][col] });
        }
    }

    for (const alpha of array) {
        for (const beta of array) {
            const rowDifference = Math.abs(alpha.row - beta.row);
            const colDifference = Math.abs(alpha.col - beta.col);
            if (rowDifference <= radius && colDifference <= radius) {
                table[alpha.row][alpha.col] += beta.value;
            }
        }
    }

    return table;
}
