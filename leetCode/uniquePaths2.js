function uniquePathsWithObstacles(grid) {
    if (grid[0][0] === 1) return 0;

    const rows = grid.length;
    const cols = grid[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                grid[row][col] = null;
            }
        }
    }
    grid[0][0] = 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] !== null) {
                if (row - 1 >= 0) {
                    grid[row][col] += grid[row - 1][col] || 0;
                }
                if (col - 1 >= 0) {
                    grid[row][col] += grid[row][col - 1] || 0;
                }
            }
        }
    }
    return grid[rows - 1][cols - 1];
}

console.log(
    uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
);
