const { WeightedGraph } = require("./WeightedGraph");

describe("Weighted Graph", () => {
    it("should add vertex", () => {
        const graph = new WeightedGraph();
        const key = "S";
        graph.addVertex(key);
        expect(graph.containsVertex(key)).toBe(true);
    });

    it("should add edge", () => {
        const graph = new WeightedGraph();
        const alpha = "S";
        const beta = "A";
        const weight = 1;
        graph.addVertex(alpha);
        graph.addVertex(beta);
        graph.addEdge(alpha, beta, weight);

        expect(graph.vertices.get(alpha).edges.get(beta)).toBe(weight);
    });

    it("should list connected components(dfs)", () => {
        const graph = new WeightedGraph();

        const alpha = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };
        seedGraphFromObject(graph, alpha);

        const nodes = graph.listConnectedComponentsWithDfs("S");

        Object.keys(alpha).forEach((key) => {
            expect(nodes).toContain(key);
        });
    });

    it("should list connected components(bfs)", () => {
        const graph = new WeightedGraph();

        const alpha = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };
        seedGraphFromObject(graph, alpha);

        const nodes = graph.listConnectedComponentsWithBfs("S");
        console.log(nodes);

        Object.keys(alpha).forEach((key) => {
            expect(nodes).toContain(key);
        });
    });

    it("should perform dijkstra shortest path", () => {
        const graph = new WeightedGraph();

        const seed = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };

        seedGraphFromObject(graph, seed);

        const result = graph.dijkstra("S");

        console.log(result);
    });
    it("should perform bellman ford on DAG", () => {
        const graph = new WeightedGraph();

        const seed = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };

        seedGraphFromObject(graph, seed);
        const bellmanFordResult = graph.bellmanFord("S");
        const dijkstraResult = graph.dijkstra("S");

        for (const [key, value] of bellmanFordResult.dist) {
            expect(dijkstraResult.dist.get(key)).toBe(value);
        }

        for (const [key, value] of bellmanFordResult.prev) {
            expect(dijkstraResult.prev.get(key)).toBe(value);
        }
    });

    it("should perform bellman ford on graph with negative cycles", () => {
        const graph = new WeightedGraph();
        graph.addVertex("S");
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");

        graph.addEdge("S", "A", 1);
        graph.addEdge("S", "D", 7);
        graph.addEdge("A", "B", 2);
        graph.addEdge("A", "C", 5);
        graph.addEdge("C", "B", -10);
        graph.addEdge("B", "A", 3);

        const bellmanFordResult = graph.bellmanFord("S");
        expect(bellmanFordResult).toBeUndefined();
    });

    it("should find shortest paths with dfs", () => {
        const graph = new WeightedGraph();

        const seed = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };

        seedGraphFromObject(graph, seed);
        const dfsResult = graph.shortestPathWithDfs("S");
        console.log(dfsResult);
        const dijkstraResult = graph.dijkstra("S");

        for (const [key, value] of dfsResult.dist) {
            expect(dijkstraResult.dist.get(key)).toBe(value);
        }

        for (const [key, value] of dfsResult.prev) {
            expect(dijkstraResult.prev.get(key)).toBe(value);
        }
    });

    it("should find shortest paths with bfs", () => {
        const graph = new WeightedGraph();

        const seed = {
            S: {
                A: 1,
                B: 2,
            },
            A: {
                C: 5,
                E: 2,
            },
            B: {
                A: 1,
                D: 1,
            },
            D: {
                F: 1,
            },
            F: {},
            E: {
                F: 4,
                D: 1,
            },
            C: {
                E: 3,
            },
        };

        seedGraphFromObject(graph, seed);
        const bfsResult = graph.shortestPathWithBfs("S");
        const dijkstraResult = graph.dijkstra("S");

        for (const [key, value] of bfsResult.dist) {
            expect(dijkstraResult.dist.get(key)).toBe(value);
        }

        for (const [key, value] of bfsResult.prev) {
            expect(dijkstraResult.prev.get(key)).toBe(value);
        }
    });
});

function seedGraphFromObject(graph, object) {
    for (const key in object) {
        graph.addVertex(key);
    }

    for (const key in object) {
        for (const edgeKey in object[key]) {
            graph.addEdge(key, edgeKey, object[key][edgeKey]);
        }
    }
}

function prettyPrint(x) {
    const { inspect } = require("util");
    console.log(inspect(x, false, null, true));
}
