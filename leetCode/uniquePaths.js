function uniquePaths(m, n) {
    const grid = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let row = 0; row < m; row++) {
        grid[row][0] = 1;
    }

    for (let col = 0; col < n; col++) {
        grid[0][col] = 1;
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
        }
    }

    return grid[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));
