/*function buildTriangle(n) {
    const triangle = [[1]];

    for (let i = 1; i <= n; i++) {
        const row = Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const leftParent = triangle[i - 1][j - 1];
            const rightParent = triangle[i - 1][j];
            row[j] = leftParent + rightParent;
        }
        triangle.push(row);
    }
    return triangle;
}*/

//console.log(buildTriangle(4));

function combine(n, k) {
    const combinations = [];

    function dfs(accum, start) {
        if (accum.length === k) {
            combinations.push([...accum]);
        } else {
            for (let i = start; i <= n; i++) {
                accum.push(i);
                dfs(accum, i + 1);
                accum.pop();
            }
        }
    }

    const accum = [];

    dfs(accum, 1);
    return combinations;
}

console.time();
console.log(combine(4, 3));
console.timeEnd();
