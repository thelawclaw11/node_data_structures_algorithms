const PriorityQueue = require("../PriorityQueue/PriorityQueue");
const Queue = require("../Queue");

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

    dfs(sourceKey) {
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

    bfs(sourceKey) {
        const queue = new Queue();
        queue.enqueue(sourceKey);

        const visited = new Set();
        visited.add(sourceKey);

        while (!queue.isEmpty()) {
            const key = queue.dequeue();
            const vertex = this.getVertex(key);
            vertex.edges.forEach((value, edgeKey) => {
                if (!visited.has(edgeKey)) {
                    visited.add(edgeKey);
                    queue.enqueue(edgeKey);
                }
            });
        }

        return Array.from(visited);
    }

    dijkstra(sourceKey) {
        const dist = new Map();
        const prev = new Map();

        const Q = new PriorityQueue((a, b) => dist.get(a) < dist.get(b));

        const searched = new Set();

        this.vertices.forEach((_, key) => {
            dist.set(key, Infinity);
            prev.set(key, null);
            Q.insert(key);
        });

        dist.set(sourceKey, 0);

        while (!Q.isEmpty()) {
            const key = Q.extract();
            const vertex = this.getVertex(key);
            vertex.edges.forEach((edgeWeight, edgeKey) => {
                if (!searched.has(edgeKey)) {
                    const alt = dist.get(key) + edgeWeight;
                    if (alt < dist.get(edgeKey)) {
                        dist.set(edgeKey, alt);
                        prev.set(edgeKey, key);
                    }
                }
            });
        }

        return { dist, prev };
    }

    bellmanFord(sourceKey) {
        const dist = new Map();
        const prev = new Map();

        this.vertices.forEach((_, key) => {
            dist.set(key, Infinity);
            prev.set(key, null);
        });
        dist.set(sourceKey, 0);

        for (let i = 0; i < this.vertices.length; i++) {}
    }
}

module.exports = { WeightedGraph };
