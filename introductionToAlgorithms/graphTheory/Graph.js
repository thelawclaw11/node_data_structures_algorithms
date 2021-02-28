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

//undirected
class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertices(...keys) {
        for (const key of keys) {
            this.addVertex(key);
        }
        return this;
    }

    addVertex(key) {
        this.vertices[key] = [];
        return this;
    }

    addEdge(leftKey, rightKey) {
        const leftVertex = this.vertices[leftKey];
        const rightVertex = this.vertices[rightKey];

        leftVertex.push(rightKey);
        rightVertex.push(leftKey);

        return this;
    }

    getShortestPath(start, end) {
        const { parent } = this.bfs(start);

        const endToStart = [end];

        while (parent[endToStart[endToStart.length - 1]] !== null) {
            endToStart.push(parent[endToStart[endToStart.length - 1]]);
        }

        const startToEnd = endToStart.reverse();
        return startToEnd;
    }

    dfs() {
        const parent = Array(this.vertices.length).fill(null);
        const accum = [];

        const visit = (vertexIndex) => {
            const neighbors = this.vertices[vertexIndex];
            for (const neighbor of neighbors) {
                if (parent[neighbor] === null) {
                    accum.push(neighbor);
                    parent[neighbor] = vertexIndex;

                    visit(neighbor);
                }
            }
        };

        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i]) {
                visit(i);
            }
        }

        return accum;
    }

    bfs(start = 0) {
        const level = Array(this.vertices.length).fill(null);
        level[start] = 0;

        const parent = [];
        parent[start] = null;
        let i = 1;
        const accum = [start];
        let frontier = [start];

        while (frontier.length > 0) {
            const next = [];
            for (const u of frontier) {
                for (const v of this.vertices[u]) {
                    if (level[v] === null) {
                        level[v] = i;
                        parent[v] = u;
                        next.push(v);
                    }
                }
            }
            frontier = next;
            accum.push(next);
            i++;
        }
        //console.table(parent);
        return { accum, parent, level };
    }

    // bfs(start = 0) {
    //     const visited = Array(this.vertices.length).fill(false);
    //     visited[start] = true;
    //
    //     const queue = new Queue();
    //     queue.enqueue(start);
    //
    //     const result = [];
    //
    //     let level = 1;
    //
    //     while (!queue.isEmpty()) {
    //         const vertexIndex = queue.dequeue();
    //         visited[vertexIndex] = true;
    //
    //         const neighbors = this.vertices[vertexIndex];
    //
    //         for (const neighbor of neighbors) {
    //             if (visited[neighbor] === false) {
    //                 visited[neighbor] = true;
    //                 queue.enqueue(neighbor);
    //                 result.push(neighbor);
    //             }
    //         }
    //     }
    //     return result;
    // }
    print() {
        console.table(this.vertices);
    }
}

module.exports = { Graph, Queue };
