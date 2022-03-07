const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
    it("should find element", () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const result = binarySearch(nums, 9);
        expect(result).toBe(4);
    });

    it("should return -1 if item is not found", () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const result = binarySearch(nums, 2);
        expect(result).toBe(-1);
    });
});
