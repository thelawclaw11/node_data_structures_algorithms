const treesAreIsomorphic = require("./treesAreIsomorphic");

class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

describe("treesAreIsoMorphic", () => {
    it("should check if trees are isomorphic", () => {
        const left = new Node(0, [
            new Node(2, [new Node(6), new Node(7)]),
            new Node(1, [new Node(4), new Node(5, [new Node(9)])]),
            new Node(3, [new Node(8)]),
        ]);

        const right = new Node(0, [
            new Node(3, [new Node(8)]),
            new Node(1, [new Node(5, [new Node(9)]), new Node(4)]),
            new Node(2, [new Node(6), new Node(7)]),
        ]);

        expect(treesAreIsomorphic(left, right)).toBeTruthy();
    });
});
