class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex(key) {
        this.vertices[key] = [];
    }

    addEdge(leftKey, rightKey, weight) {
        this.vertices[leftKey].push([rightKey, weight]);
        this.vertices[rightKey].push([leftKey, weight]);
    }
}

module.exports;
