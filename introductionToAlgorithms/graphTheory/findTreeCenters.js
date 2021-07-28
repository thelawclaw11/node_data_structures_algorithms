function findTreeCenters_peeling(graph) {
    const n = graph.length;
    const degree = Array(n).fill(0);
    let leaves = [];

    for (let i = 0; i < n; i++) {
        degree[i] = graph[i].length;
        if (degree[i] <= 1) {
            leaves.push(i);
            degree[i] = 0;
        }
    }
    let count = leaves.length;

    while (count < n) {
        const newLeaves = [];
        for (const node of leaves) {
            for (const neighbor of graph[node]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    newLeaves.push(neighbor);
                }
            }

            degree[node] = 0;
            count += newLeaves.length;
            leaves = newLeaves;
        }
    }

    const out = [];

    const maxDegree = Math.max(...degree);

    for (let i = 0; i < n; i++) {
        if (degree[i] === maxDegree) {
            out.push(i);
        }
    }

    return out;
}

function findTreeCenters_dfs() {}

module.exports = { findTreeCenters_peeling };
