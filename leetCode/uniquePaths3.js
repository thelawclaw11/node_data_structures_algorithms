function uniquePathsIII(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const start = [];
    const end = [];

    let openGridSquaresCount = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                start.push(row, col);
            }
            if (grid[row][col] === 2) {
                end.push(row, col);
            }
            if (grid[row][col] === 0) {
                openGridSquaresCount++;
            }
        }
    }

    //1 starting
    //2 ending
    //0 empty
    //-1 obstacle

    //3 already been visited

    let count = 0;

    function traverse(row, col, openSpacesVisited) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }
        if (grid[row][col] === 2 && openSpacesVisited === openGridSquaresCount) {
            count++;
            return;
        }

        if (grid[row][col] !== 0) {
            return;
        }

        openSpacesVisited++;

        grid[row][col] = 3;

        //top
        traverse(row - 1, col, openSpacesVisited);
        //left
        traverse(row, col - 1, openSpacesVisited);
        //right
        traverse(row, col + 1, openSpacesVisited);
        //bottom
        traverse(row + 1, col, openSpacesVisited);

        grid[row][col] = 0;
    }

    traverse(start[0] - 1, start[1], 0);
    traverse(start[0], start[1] - 1, 0);
    traverse(start[0], start[1] + 1, 0);
    traverse(start[0] + 1, start[1], 0);

    return count;
}

function allTrue(object) {}

function arePointsEqual(x, y) {
    return x[0] === y[0] && x[1] === y[1];
}

console.log(
    uniquePathsIII([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
    ])
);
