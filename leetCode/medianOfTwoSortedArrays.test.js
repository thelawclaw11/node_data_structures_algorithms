const {
    findAboveAndBelowForeignArray,
    findAboveAndBelowNativeArray,
    findMedianSortedArrays,
} = require("./medianOfTwoSortedArrays");

describe("median of two sorted arrays", () => {
    it("find elements above and below", () => {
        const array = [1, 2, 3, 4, 5];
        expect(findAboveAndBelowNativeArray(0, array)).toEqual([0, 4]);
        expect(findAboveAndBelowNativeArray(1, array)).toEqual([1, 3]);
        expect(findAboveAndBelowNativeArray(2, array)).toEqual([2, 2]);
        expect(findAboveAndBelowNativeArray(4, array)).toEqual([4, 0]);
    });

    it("find above and below for number in array", () => {
        const array = [1, 2, 3, 4, 5];
        expect(findAboveAndBelowForeignArray(3, array)).toEqual([2, 2]);
        expect(findAboveAndBelowForeignArray(1, array)).toEqual([0, 4]);
        expect(findAboveAndBelowForeignArray(5, array)).toEqual([4, 0]);
        expect(findAboveAndBelowForeignArray(2, array)).toEqual([1, 3]);
        expect(findAboveAndBelowForeignArray(4, array)).toEqual([3, 1]);
    });

    it("find insertion point of element not in array", () => {
        const array = [1, 3, 5, 7, 9];
        expect(findAboveAndBelowForeignArray(2, array)).toEqual([1, 4]);
        expect(findAboveAndBelowForeignArray(0, array)).toEqual([0, 5]);
        expect(findAboveAndBelowForeignArray(4, array)).toEqual([2, 3]);
        expect(findAboveAndBelowForeignArray(6, array)).toEqual([3, 2]);
        expect(findAboveAndBelowForeignArray(8, array)).toEqual([4, 1]);
        expect(findAboveAndBelowForeignArray(10, array)).toEqual([5, 0]);
    });
});
