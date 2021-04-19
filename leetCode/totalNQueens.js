function totalNQueens(n) {
    const queens = [];

    let count = 0;

    function traverse(row) {
        if (row >= n) {
            count++;
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
    return count;
}
