const FenwickTree = require("./fenwickTree");

function rangeSum(array, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += array[i];
    }
    return sum;
}

describe("fenwick tree", () => {
    const array = [1, 8, -5, 7, 3, -2, 2, 5];

    it("should do rangeSum", () => {
        const fenwickTree = new FenwickTree(array);

        const start = 2;
        const end = 5;

        expect(fenwickTree.rangeSum(start, end)).toBe(rangeSum(array, start, end));
    });
});
