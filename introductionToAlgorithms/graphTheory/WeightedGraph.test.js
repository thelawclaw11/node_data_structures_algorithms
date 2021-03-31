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

    /*    it("should find shorted path", () => {
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
        prettyPrint(graph);
    });*/
    it("should list connected components", () => {
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
        prettyPrint(graph);

        const nodes = graph.listConnectedNodes("S");
        console.log(nodes);

        Object.keys(alpha).forEach((key) => {
            expect(nodes).toContain(key);
        });
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
