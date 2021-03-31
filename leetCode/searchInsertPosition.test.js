const searchInsertPosition = require("./searchInsertPosition");

describe("search insert position", () => {
    it("should return index of element if exists", () => {
        const array = [1, 2, 3, 4, 5];
        expect(searchInsertPosition(array, 1)).toBe(0);
        expect(searchInsertPosition(array, 2)).toBe(1);
        expect(searchInsertPosition(array, 3)).toBe(2);
        expect(searchInsertPosition(array, 4)).toBe(3);
        expect(searchInsertPosition(array, 5)).toBe(4);
    });

    it("should return insertion position if not in array", () => {
        expect(searchInsertPosition([1, 3, 4, 5], 2)).toBe(1);
        expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
        expect(searchInsertPosition([1, 3], 2)).toBe(1);
        expect(searchInsertPosition([1, 3, 5, 6], 2));
    });

    it("should handle nums length 1", () => {
        expect(searchInsertPosition([1], 1)).toBe(0);
    });
});
