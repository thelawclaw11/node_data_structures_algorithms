const SegmentTree = require("./SegmentTree");

function rangeMax(array, start, end) {
    return Math.max(...array.slice(start, end + 1));
}

describe("segment tree", () => {
    const array = [1, 8, -5, 7, 3, -2, 2, 5];

    it("should build segment tree", () => {
        const segmentTree = new SegmentTree(array);

        expect(segmentTree.root.data).toBe(8);

        expect(segmentTree.root.left.data).toBe(8);
        expect(segmentTree.root.right.data).toBe(5);

        expect(segmentTree.root.left.left.data).toBe(8);
        expect(segmentTree.root.left.right.data).toBe(7);
        expect(segmentTree.root.right.left.data).toBe(3);
        expect(segmentTree.root.right.right.data).toBe(5);

        expect(segmentTree.root.left.left.left.data).toBe(1);
        expect(segmentTree.root.left.left.right.data).toBe(8);
        expect(segmentTree.root.left.right.left.data).toBe(-5);
        expect(segmentTree.root.left.right.right.data).toBe(7);
        expect(segmentTree.root.right.left.left.data).toBe(3);
        expect(segmentTree.root.right.left.right.data).toBe(-2);
        expect(segmentTree.root.right.right.left.data).toBe(2);
        expect(segmentTree.root.right.right.right.data).toBe(5);

        // expect(segmentTree.rangeMax(start, end)).toBe(rangeMax(array, start, end));
    });

    it("should compute rangeMax", () => {
        const segmentTree = new SegmentTree(array);
        expect(segmentTree.rangeMax(2, 6)).toBe(7);
        expect(segmentTree.rangeMax(0, 7)).toBe(8);
        expect(segmentTree.rangeMax(0, 0)).toBe(1);
        expect(segmentTree.rangeMax(1, 1)).toBe(8);
        expect(rangeMax(array, 0, 0)).toBe(1);
        testAllRanges(array, segmentTree);
    });

    it("should handle array of size 1", () => {
        const array = [2];
        const segmentTree = new SegmentTree(array);
        expect(segmentTree.rangeMax(0, 0)).toBe(2);
    });

    it("should handle array of size 2", () => {
        const array = [1788, 890];
        const segmentTree = new SegmentTree(array);
        expect(segmentTree.rangeMax(0, 1)).toBe(1788);
    });

    it("should handle array of size 3", () => {
        const array = [2, 3, 1];

        const segmentTree = new SegmentTree(array);
        // expect(segmentTree.rangeMax(0, 2)).toBe(3);
    });
});

function testAllRanges(array, segmentTree) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            expect(segmentTree.rangeMax(i, j)).toBe(rangeMax(array, i, j));
        }
    }
}
