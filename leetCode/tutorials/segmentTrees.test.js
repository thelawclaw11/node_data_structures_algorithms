const { buildSegmentTree, rangeQuery } = require("./segmentTrees");

const sum = (a, b) => a + b;

describe("build sum segment tree", () => {
    it("build segment tree with 1 element", () => {
        const arr = [18];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([18]);
    });

    it("build segment tree with 2 elements", () => {
        const arr = [18, 17];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([35, 18, 17]);
    });

    it("build segment tree with 3 elements", () => {
        const arr = [18, 17, 13];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([48, 35, 13, 18, 17, 0, 0]);
    });

    it("build segment tree with 4 elements", () => {
        const arr = [18, 17, 13, 19];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([67, 35, 32, 18, 17, 13, 19]);
    });

    it("build segment tree with 5 elements", () => {
        const arr = [18, 17, 13, 19, 15];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([82, 48, 34, 35, 13, 19, 15, 18, 17, 0, 0, 0, 0, 0, 0]);
    });

    it("build segment tree with 6 elements", () => {
        const arr = [18, 17, 13, 19, 15, 11];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([93, 48, 45, 35, 13, 34, 11, 18, 17, 0, 0, 19, 15, 0, 0]);
    });

    it("build segment tree with 7 elements", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([28, 10, 18, 3, 7, 11, 7, 1, 2, 3, 4, 5, 6, 0, 0]);
    });

    it("build segment tree with 8 elements", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([36, 10, 26, 3, 7, 11, 15, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it("build segment tree with 10 elements", () => {
        const arr = [18, 17, 13, 19, 15, 11, 20, 12, 33, 25];
        const segmentTree = buildSegmentTree(arr, sum);
        expect(segmentTree).toEqual([
            183, 82, 101, 48, 34, 43, 58, 35, 13, 19, 15, 31, 12, 33, 25, 18, 17, 0, 0, 0, 0, 0, 0,
            11, 20, 0, 0, 0, 0, 0, 0,
        ]);
    });
});

describe("range queries", () => {
    it("should handle queries outside range", () => {
        const tree = buildSegmentTree([1, 2, 3, 4, 5, 6, 7, 8], sum, 0);
        expect(rangeQuery(tree, sum, 0, 8, 9, 8)).toBe(0);
    });

    it("should do range query", () => {
        const tree = buildSegmentTree([1, 2, 3, 4, 5, 6, 7, 8], sum, 0);
        expect(rangeQuery(tree, sum, 0, 0, 7, 8)).toBe(36);
    });

    it("should do all range queries on 1 elements", () => {
        const array = [1];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 2 elements", () => {
        const array = [1, 2];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 3 elements", () => {
        const array = [1, 2, 3];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 4 elements", () => {
        const array = [1, 2, 3, 4];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 5 elements", () => {
        const array = [1, 2, 3, 4, 5];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 6 elements", () => {
        const array = [1, 2, 3, 4, 5, 6];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 7m elements", () => {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 8 elements", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 9 elements", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });

    it("should do all range queries on 10 elements", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const tree = buildSegmentTree(array, sum, 0);
        //expect(rangeQuery(tree, sum, 0, 0, array.length - 1, array.length)).toBe(1);

        testAllRanges(array, tree);
    });
});

function rangeSum(array, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += array[i];
    }
    return sum;
}

function testAllRanges(array, tree) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            expect(rangeQuery(tree, sum, 0, i, j, array.length)).toBe(rangeSum(array, i, j));
        }
    }
}
