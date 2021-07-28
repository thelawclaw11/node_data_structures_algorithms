const { Queue } = require("@datastructures-js/queue");

function countComponents(n, edges) {
    const adjacencyList = Array(n)
        .fill()
        .map(() => []);

    for (const [a, b] of edges) {
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }

    const visited = Array(n).fill(false);

    let count = 0;

    function traverse(nodeKey, hasPredecessor) {
        if (visited[nodeKey] === true) {
            return;
        }

        if (!(visited[nodeKey] || hasPredecessor)) {
            count++;
        }

        visited[nodeKey] = true;

        for (const neighborKey of adjacencyList[nodeKey]) {
            if (visited[neighborKey] !== true) {
                traverse(neighborKey, true);
            }
        }
    }

    for (let i = 0; i < adjacencyList.length; i++) {
        traverse(i, false);
    }

    return count;
}

console.log(
    countComponents(5, [
        [0, 1],
        [1, 2],
        [3, 4],
    ])
);
// console.log(
//     countComponents(4, [
//         [2, 3],
//         [1, 2],
//         [1, 3],
//     ])
// );

// function countComponents(n, edges) {
//     edges.sort((a, b) => a[0] - b[0]);
//
//     const sortedEdges = edges.map(([left, right]) => {
//         if (left < right) {
//             return [left, right];
//         } else {
//             return [right, left];
//         }
//     });
//
//     const alpha = new Set();
//
//     for (const [left, right] of sortedEdges) {
//         alpha.add(left);
//         alpha.add(right);
//     }
//
//     let count = n - alpha.size;
//
//     const visited = new Set();
//
//     for (const [left, right] of sortedEdges) {
//         if (!visited.has(left)) {
//             count++;
//         }
//         visited.add(left);
//         visited.add(right);
//     }
//
//     return count;
// }
