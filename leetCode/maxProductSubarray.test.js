const maxProduct = require("./maxProductSubarray");

describe("max product subarray", () => {
    it("alpha", () => {
        const input = [2, 3, -2, 4, 0, -2, 4, 3, -9, -6, 0, 3, 7, -2, 8, -1];
        const result = maxProduct(input);
        expect(result).toBe(648);
    });
    it("one", () => {
        const input = [2, 3, -2, 4];

        const result = maxProduct(input);
        expect(result).toBe(6);
    });
    it("two", () => {
        const input = [-3, -1, -1];
        const result = maxProduct(input);
        console.log(result);
        expect(result).toBe(3);
    });
    it("three", () => {
        const input = [-4, -3];
        const result = maxProduct(input);
        console.log(result);
        expect(result).toBe(12);
    });
});
