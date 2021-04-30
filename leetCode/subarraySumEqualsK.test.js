const subarraySum = require("./subarraySumEqualsK");

describe("solution", () => {
    it("one", () => {
        expect(subarraySum([10, 2, -2, -20, 10], -10)).toBe(3);
    });
    it("two", () => {
        expect(subarraySum([1], 0)).toBe(0);
    });

    it("three", () => {
        expect(subarraySum([-1, -1, 1], 0)).toBe(1);
    });
});
