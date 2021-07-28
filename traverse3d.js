function findPath(matrix) {
    const cubeDimensions = 3;

    const visited = Array(3)
        .fill(false)
        .map(() =>
            Array(3)
                .fill(false)
                .map(() => Array(3).fill(false))
        );

    function traverse(x, y, z, path = []) {
        if (x === cubeDimensions - 1 && y === cubeDimensions - 1 && z === cubeDimensions - 1) {
            return path;
        }

        if (x >= cubeDimensions || y >= cubeDimensions || z >= cubeDimensions || x < 0 || y < 0 || z < 0) {
            return false;
        }

        if (matrix[z][x][y] === 0) {
            return false;
        }

        if (visited[z][x][y] === true) {
            return false;
        }

        visited[z][x][y] = true;

        const neighbors = [
            [x + 1, y, z],
            [x - 1, y, z],
            [x, y + 1, z],
            [x, y - 1, z],
            [x, y, z + 1],
            [x, y, z - 1],
        ];

        for (const neighbor of neighbors) {
            path.push(neighbor);
            const result = traverse(...neighbor, path);
            if (result !== false) {
                return result;
            }
            path.pop();
        }
    }

    return traverse(0, 0, 0);
}

const matrix = [
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
];

console.log(findPath(matrix));
