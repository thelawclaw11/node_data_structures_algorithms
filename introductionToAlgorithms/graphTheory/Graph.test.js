const { Graph, Queue } = require("./Graph");

describe("Graph", () => {
    it("should add vertex", () => {
        const graph = new Graph();
        graph.addVertex(1).addVertex(2);

        expect(graph.vertices[1]).toEqual([]);
        expect(graph.vertices[2]).toEqual([]);
    });
    it("should add edge between two vertices", () => {
        const graph = new Graph();
        graph.addVertex(1).addVertex(2);

        graph.addEdge(1, 2);

        const left = graph.vertices[1];
        const right = graph.vertices[2];
        expect(graph.vertices[1]).toContain(2);
        expect(graph.vertices[2]).toContain(1);
    });
    it("should do bfs", () => {
        const graph = new Graph();

        const keys = [10, 1, 9, 0, 11, 7, 6, 5, 8, 12, 2, 3, 4];

        graph.addVertices(...keys);

        graph
            .addEdge(10, 1)
            .addEdge(10, 9)
            .addEdge(9, 0)
            .addEdge(0, 11)
            .addEdge(0, 7)
            .addEdge(7, 6)
            .addEdge(6, 5)
            .addEdge(1, 8)
            .addEdge(8, 12)
            .addEdge(12, 2)
            .addEdge(2, 3)
            .addEdge(3, 4)
            .addEdge(8, 9);

        const vertices = graph.bfs(10).accum.flat();
        console.log(vertices);
        // graph.print();

        expect(vertices).toEqual(Array.from(new Set(vertices)));

        // expect(graph.findShortestPath(10, 4)).toBe(6);
        // expect(graph.findShortestPath(5, 4)).toBe(9);
    });
    it("should find shortestPath", () => {
        const graph = new Graph();

        const keys = [10, 1, 9, 0, 11, 7, 6, 5, 8, 12, 2, 3, 4];

        graph.addVertices(...keys);

        graph
            .addEdge(10, 1)
            .addEdge(10, 9)
            .addEdge(9, 0)
            .addEdge(0, 11)
            .addEdge(0, 7)
            .addEdge(7, 6)
            .addEdge(6, 5)
            .addEdge(1, 8)
            .addEdge(8, 12)
            .addEdge(12, 2)
            .addEdge(2, 3)
            .addEdge(3, 4)
            .addEdge(8, 9)
            .addEdge(5, 12);

        const shortestPath = graph.getShortestPath(10, 7);
        expect(shortestPath.length).toBe(4);
        expect(shortestPath).toEqual([10, 9, 0, 7]);
    });
    it("should do dfs", () => {
        const graph = new Graph();
        const keys = [1, 2, 3, 4, 5, 6, 7];

        graph.addVertices(...keys);

        graph.addEdge(1, 4).addEdge(4, 2).addEdge(4, 7).addEdge(3, 7).addEdge(3, 2).addEdge(4, 5).addEdge(5, 6);

        const search = graph.dfs(1);
        console.log(search);
    });
});

describe("Queue", () => {
    it("should enqueue and dequeue single value", () => {
        const queue = new Queue();

        queue.enqueue(1);
        expect(queue.head.value).toBe(1);
        expect(queue.tail.value).toBe(1);

        expect(queue.dequeue()).toBe(1);
        expect(queue.isEmpty()).toBeTruthy();
    });
    it("should handle multiple values", () => {
        const queue = new Queue();

        queue.enqueue(1);

        expect(queue.tail.value).toBe(1);
        queue.enqueue(2);
        expect(queue.tail.value).toBe(2);
        expect(queue.dequeue()).toBe(1);

        expect(queue.dequeue()).toBe(2);

        expect(queue.isEmpty()).toBeTruthy();
    });
});
