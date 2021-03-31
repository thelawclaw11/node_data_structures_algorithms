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

class Vertex {
    constructor(key) {
        this.edges = new Map();
        this.key = key;
    }
}

class WeightedGraph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(key) {
        const vertex = new Vertex(key);
        this.vertices.set(key, vertex);
    }

    containsVertex(key) {
        return this.vertices.has(key);
    }

    getVertex(key) {
        return this.vertices.get(key);
    }

    addEdge(originKey, destinationKey, weight) {
        const origin = this.getVertex(originKey);
        const destination = this.getVertex(destinationKey);

        origin.edges.set(destination.key, weight);
    }

    listConnectedNodes(sourceKey) {
        const visited = new Set();

        const inner = (key) => {
            if (visited.has(key)) {
                return;
            }

            visited.add(key);
            const edges = this.vertices.get(key).edges;
            edges.forEach((weight, key) => {
                inner(key);
            });
        };

        inner(sourceKey);
        return Array.from(visited);
    }
    /*shortestPaths(sourceKey) {
        const queue = new Queue();
        const distance = new Map();
        const predecessor = new Map();

        for (const key of this.vertices.key()) {
            distance.set(key, Infinity);
        }
        distance.set(sourceKey, 0);
        predecessor.set(sourceKey, sourceKey);

        queue.enqueue(sourceKey);

        while (!queue.isEmpty()) {
            const currentKey = queue.dequeue();
            const currentVertex = this.vertices.get(currentKey);

            for (const [endKey, weight] of currentVertex.edges.entries()) {
            }
        }
    }*/

    topologicalSort() {}

    /*dijkstra(originKey, destinationKey) {
        const d = [];
        const pi = [];

        this.vertices.forEach();
    }*/
}

module.exports = { WeightedGraph };
