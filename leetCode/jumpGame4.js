class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(value) {
        const node = new QueueNode(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue() {
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.value;
    }
}

// function getEdges(graph) {
//     const edges = [];
//
//     for (let startKey = 0; startKey < graph.length; startKey++) {
//         for (const destinationKey of graph[startKey]) {
//             edges.push([startKey, destinationKey]);
//         }
//     }
//
//     return edges;
// }
//
// function bellmanFord(graph) {
//     const numVertices = graph.length;
//     const edges = getEdges(graph);
//
//     const distance = Array(graph.length).fill(Infinity);
//     distance[0] = 0;
//
//     for (let i = 0; i < numVertices - 1; i++) {
//         for (const [startKey, destinationKey] of edges) {
//             const alternativeDistance = distance[startKey] + 1;
//             if (alternativeDistance < distance[destinationKey]) {
//                 distance[destinationKey] = alternativeDistance;
//             }
//         }
//     }
//
//     return distance[graph.length - 1];
// }
//
// function buildAdjacencyList(array) {
//     const locations = {};
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] in locations) {
//             locations[array[i]].push(i);
//         } else {
//             locations[array[i]] = [i];
//         }
//     }
//
//     const graph = Array(array.length)
//         .fill(0)
//         .map(() => []);
//
//     for (let i = 0; i < array.length; i++) {
//         const toAdd = new Set();
//
//         if (i !== array.length - 1) {
//             toAdd.add(i + 1);
//         }
//         if (i !== 0) {
//             toAdd.add(i - 1);
//         }
//
//         for (const key in locations[array[i]]) {
//             toAdd.add(locations[array[i]][key]);
//         }
//
//         toAdd.delete(i);
//
//         graph[i] = Array.from(toAdd);
//     }
//
//     return graph;
// }
//
// class MyPriorityQueue {
//     constructor(comparator) {
//         this.comparator = comparator;
//         this.heap = [];
//     }
//
//     isEmpty() {
//         return this.heap.length === 0;
//     }
//
//     insert(element) {
//         if (this.isEmpty()) {
//             this.heap.push(element);
//             return;
//         }
//
//         this.heap.push(element);
//         let i = this.heap.length - 1;
//
//         while (i !== 0 && this.comparator(this.heap[i], this.heap[this._getParentIndex(i)])) {
//             [this.heap[i], this.heap[this._getParentIndex(i)]] = [this.heap[this._getParentIndex(i)], this.heap[i]];
//             i = this._getParentIndex(i);
//         }
//     }
//
//     extract() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         const min = this.heap[0];
//
//         this.heap[0] = this.heap.pop();
//
//         this.minHeapify();
//
//         return min;
//     }
//
//     minHeapify(i = 0) {
//         const leftChildIndex = this._getLeftChildIndex(i);
//         const rightChildIndex = this._getRightChildIndex(i);
//
//         let best = i;
//
//         if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[best])) {
//             best = leftChildIndex;
//         }
//
//         if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[best])) {
//             best = rightChildIndex;
//         }
//
//         if (best !== i) {
//             [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
//             this.minHeapify(best);
//         }
//     }
//
//     _getLeftChildIndex(i) {
//         return (i + 1) * 2 - 1;
//     }
//     _getRightChildIndex(i) {
//         return (i + 1) * 2;
//     }
//
//     _getParentIndex(childIndex) {
//         return Math.floor((childIndex - 1) / 2);
//     }
// }

//console.log(compressArray([1, 5, 5, 5, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9]));

function compressArray(array) {
    const compressedArray = [];

    let lastNumber = null;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === lastNumber) {
            count++;
        } else {
            if (count > 1) {
                compressedArray.push(array[i - 1]);
            }
            compressedArray.push(array[i]);

            lastNumber = array[i];
            count = 1;
        }
    }

    if (count > 1) {
        compressedArray.push(lastNumber);
    }

    return compressedArray;
}

function minJumps(rawArray) {
    const array = compressArray(rawArray);

    const locations = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] in locations) {
            locations[array[i]].push(i);
        } else {
            locations[array[i]] = [i];
        }
    }

    const visited = Array(array.length).fill(false);

    let frontier = new Set();
    frontier.add(0);
    let distance = 0;

    while (frontier.size > 0) {
        const nextFrontier = new Set();

        for (const index of frontier) {
            {
                if (index === array.length - 1) {
                    return distance;
                }
                visited[index] = true;

                const rightNeighbor = index + 1;
                const leftNeighbor = index - 1;

                if (visited[rightNeighbor] === false && rightNeighbor < array.length) {
                    nextFrontier.add(rightNeighbor);
                }

                if (visited[leftNeighbor] === false && leftNeighbor > 0) {
                    nextFrontier.add(leftNeighbor);
                }

                for (const neighbor of locations[array[index]]) {
                    if (visited[neighbor] === false) {
                        nextFrontier.add(neighbor);
                    }
                }
            }
        }

        frontier = nextFrontier;
        distance++;
    }

    return -1;
}

//console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));

const sevens = [];

for (let i = 0; i < 20000; i++) {
    sevens.push(7);
}

console.log(minJumps(sevens));

// function minJumps(array) {
//     const locations = {};
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] in locations) {
//             locations[array[i]].push(i);
//         } else {
//             locations[array[i]] = [i];
//         }
//     }
//
//     const distance = Array(array.length).fill(Infinity);
//     distance[0] = 0;
//
//     const visited = Array(array.length);
//     visited[0] = true;
//
//     const queue = new Queue();
//     queue.enqueue(0);
//
//     let count = 0;
//
//     while (!queue.isEmpty()) {
//         const startKey = queue.dequeue();
//         count++;
//         visited[startKey] = true;
//
//         function F(destinationKey) {
//             if (!visited[destinationKey] && destinationKey > 0 && destinationKey < array.length) {
//                 queue.enqueue(destinationKey);
//
//                 const alternativeDistance = distance[startKey] + 1;
//
//                 if (alternativeDistance < distance[destinationKey]) {
//                     distance[destinationKey] = alternativeDistance;
//                 }
//             }
//         }
//
//         F(startKey + 1);
//         F(startKey - 1);
//
//         const startKeyValue = array[startKey];
//
//         for (const destinationKey of locations[startKeyValue]) {
//             F(destinationKey);
//         }
//     }
//
//     console.log(count);
//
//     return distance[array.length - 1];
// }
