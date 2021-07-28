function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

function cloneGraph(node) {
    if (node === null) {
        return null;
    }

    if (node.neighbors.length === 0) {
        return new Node(1);
    }

    const copyNodes = Array(101).fill(null);

    for (let i = 1; i < copyNodes.length; i++) {
        copyNodes[i] = new Node(i);
    }

    const visited = new Set();

    function traverse(node) {
        if (visited.has(node.val)) {
            return;
        }

        visited.add(node.val);

        for (const neighbor of node.neighbors) {
            copyNodes[node.val].neighbors.push(copyNodes[neighbor.val]);
        }

        for (const neighbor of node.neighbors) {
            traverse(neighbor);
        }
    }
    traverse(node);

    // console.log(copyNodes);

    return copyNodes[1];
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.neighbors.push(two, four);
two.neighbors.push(one, three);
three.neighbors.push(two, four);
four.neighbors.push(one, three);

console.log(cloneGraph(one));

// function cloneGraph(node) {
//     if (node === null) {
//         return null;
//     }
//
//     if (node.neighbors.length === 0) {
//         return new Node(1);
//     }
//
//     const adjacencyList = Array(101)
//         .fill()
//         .map(() => []);
//
//     const visited = new Set();
//
//     function traverse(node) {
//         if (visited.has(node.val)) {
//             return;
//         }
//
//         visited.add(node.val);
//
//         for (const neighbor of node.neighbors) {
//             adjacencyList[node.val].push(neighbor.val);
//         }
//
//         for (const neighbor of node.neighbors) {
//             traverse(neighbor);
//         }
//     }
//     traverse(node);
//
//     const filteredList = adjacencyList.filter((x) => x.length > 0);
//     filteredList.unshift(null);
//
//     const copyNodes = Array(filteredList.length).fill(null);
//
//     for (let i = 1; i < filteredList.length; i++) {
//         copyNodes[i] = new Node(i);
//     }
//
//     for (let i = 1; i < filteredList.length; i++) {
//         for (const neighbor of filteredList[i]) {
//             copyNodes[i].neighbors.push(copyNodes[neighbor]);
//         }
//     }
//
//     return copyNodes[1];
// }

// function cloneGraph(node) {
//     if (node === null) {
//         return null;
//     }
//
//     if (node.neighbors.length === 0) {
//         return new Node(1);
//     }
//
//     const copyNodes = Array(101).fill(null);
//
//     for (let i = 1; i < copyNodes.length; i++) {
//         copyNodes[i] = new Node(i);
//     }
//
//     const visited = new Set();
//
//     function traverse(node) {
//         if (visited.has(node.val)) {
//             return;
//         }
//
//         visited.add(node.val);
//
//         for (const neighbor of node.neighbors) {
//             copyNodes[node.val].neighbors.push(copyNodes[neighbor.val]);
//         }
//
//         for (const neighbor of node.neighbors) {
//             traverse(neighbor);
//         }
//     }
//     traverse(node);
//
//     // console.log(copyNodes);
//
//     return copyNodes[1];
// }
