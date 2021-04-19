function solveNQueens(n) {
    const queens = [];

    const solutions = [];

    function traverse(row) {
        if (row >= n) {
            solutions.push(formatGrid(queens, n));
            return;
        }

        for (let col = 0; col < n; col++) {
            let canPlace = true;

            for (const queen of queens) {
                if (queen.row === row) {
                    canPlace = false;
                    break;
                } else if (queen.col === col) {
                    canPlace = false;
                    break;
                } else if (queen.row - queen.col === row - col) {
                    canPlace = false;
                    break;
                } else if (queen.row + queen.col === row + col) {
                    canPlace = false;
                    break;
                }
            }

            if (canPlace === true) {
                queens.push({ row, col });
                traverse(row + 1);
                queens.pop();
            }
        }
    }
    traverse(0);
    return solutions;
}

function formatGrid(queens, n) {
    const grid = Array(n)
        .fill()
        .map(() => Array(n).fill("."));
    for (const queen of queens) {
        grid[queen.row][queen.col] = "Q";
    }
    return grid.map((row) => row.join(""));
}

function formatGrid(queens, n) {
    const grid = Array(n)
        .fill()
        .map(() => Array(n).fill("."));
    for (const queen of queens) {
        grid[queen.row][queen.col] = "Q";
    }
    return grid.map((row) => row.join(""));
}

console.time();
solveNQueens(4);
console.timeEnd();

//console.log(solveNQueens(4));
