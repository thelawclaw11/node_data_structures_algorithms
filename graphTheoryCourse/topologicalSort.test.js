const topologicalSort = require("./topologicalSort");

describe("topologicalSort", () => {
    it("should sort graph", () => {
        const graph = new Map();

        graph.add("C", ["A", "B"]);
        graph.add("B", ["D"]);
        graph.add("A", ["D"]);
        graph.add("D", ["H", "G"]);
        graph.add("E", ["A", "D", "F"]);
        graph.add("G", ["I"]);
        graph.add("F", ["J", "K"]);
        graph.add("H", ["J", "I"]);
        graph.add("I", ["L"]);
        graph.add("J", ["M", "L"]);
        graph.add("K", ["J"]);
        graph.add("M", []);
        graph.add("L", []);

        const result = topologicalSort(graph);
    });
});
