const lca = require("./lca");

class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

describe("lca", () => {
    it("should get lca", () => {
        const root = new Node(0, [
            new Node(2, [new Node(6), new Node(7)]),
            new Node(1, [new Node(4), new Node(5, [new Node(9)])]),
            new Node(3, [new Node(8)]),
        ]);

        expect(lca(root, 4, 9)).toBe(1);
    });
});
