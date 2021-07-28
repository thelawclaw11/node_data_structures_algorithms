console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ])
);
//console.log(minPathSum([[0]]));

// const Q = new MyQueue();
// Q.enqueue("canon");
// const top = Q.dequeue();
//
// console.log(top);
// console.log(Q);

//
// function minPathSum(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     const memo = Array(rows)
//         .fill(0)
//         .map(() => Array(cols).fill(0));
//
//     function traverse(row, col) {
//         if (row >= rows || col >= cols) {
//             return Infinity;
//         }
//
//         if (row === rows - 1 && col === cols - 1) {
//             return grid[row][col];
//         }
//
//         if (memo[row][col] !== 0) {
//             return memo[row][col];
//         }
//
//         const result = Math.min(traverse(row + 1, col), traverse(row, col + 1)) + grid[row][col];
//         memo[row][col] = result;
//         return result;
//     }
//
//     return traverse(0, 0);
// }

function minPathSum(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const lastRow = rows - 1;
    const lastCol = cols - 1;

    function helper(row, col, sum) {
        if (row >= rows || col >= cols) {
            return Infinity;
        }

        if (row === lastRow && col === lastCol) {
            return sum + grid[row][col];
        }

        const result = Math.min(helper(row + 1, col, sum + grid[row][col]), helper(row, col + 1, sum + grid[row][col]));
        return result;
    }

    return helper(0, 0, grid[0][0]);
}

// function minPathSum(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//
//     for (let row = 1; row < rows; row++) {
//         grid[row][0] += grid[row - 1][0];
//     }
//
//     for (let col = 1; col < cols; col++) {
//         grid[0][col] += grid[0][col - 1];
//     }
//
//     for (let row = 1; row < rows; row++) {
//         for (let col = 1; col < cols; col++) {
//             grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
//         }
//     }
//
//     return grid[rows - 1][cols - 1];
// }

// function minPathSum(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     const dist = Array(rows)
//         .fill(null)
//         .map(() => Array(cols).fill(Infinity));
//
//     dist[0][0] = grid[0][0];
//
//     let frontier = [];
//
//     frontier.push({ row: 0, col: 0 });
//
//     let count = 0;
//
//     while (frontier.length > 0) {
//         count++;
//         let nextFrontier = [];
//
//         for (const current of frontier) {
//             const distanceToCurrent = dist[current.row][current.col];
//             if (current.row + 1 < rows) {
//                 const downEdgeWeight = grid[current.row + 1][current.col];
//                 dist[current.row + 1][current.col] = Math.min(
//                     distanceToCurrent + downEdgeWeight,
//                     dist[current.row + 1][current.col]
//                 );
//                 nextFrontier.push({ row: current.row + 1, col: current.col });
//             }
//
//             if (current.col + 1 < cols) {
//                 const rightEdgeWeight = grid[current.row][current.col + 1];
//                 dist[current.row][current.col + 1] = Math.min(
//                     distanceToCurrent + rightEdgeWeight,
//                     dist[current.row][current.col + 1]
//                 );
//                 nextFrontier.push({ row: current.row, col: current.col + 1 });
//             }
//         }
//         frontier = nextFrontier;
//     }
//
//     return dist[rows - 1][cols - 1];
// }
