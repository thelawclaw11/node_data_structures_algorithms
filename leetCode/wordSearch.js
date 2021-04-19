function exist(board, word) {
    const chars = word.split("");

    const rows = board.length;
    const cols = board[0].length;

    const starts = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === chars[0]) {
                starts.push([row, col]);
            }
        }
    }

    let doesExist = false;

    const visited = Array(rows)
        .fill()
        .map(() => Array(cols).fill(false));

    function traverse(row, col, remainder) {
        if (remainder === "") {
            doesExist = true;
            return;
        }
    }

    return doesExist;
}

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCCED"
    )
);
