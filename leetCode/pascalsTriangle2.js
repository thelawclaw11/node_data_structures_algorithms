function getRow(rowIndex) {
    const triangle = generate(rowIndex + 1);
    return triangle[triangle.length - 1];
}

function generate(n) {
    const rows = [[1]];
    for (let i = 1; i < n; i++) {
        const row = Array(i + 1).fill(0);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const leftParent = rows[i - 1][j - 1];
            const rightParent = rows[i - 1][j];
            row[j] = leftParent + rightParent;
        }

        rows.push(row);
    }
    return rows;
}

console.log(getRow(3));
