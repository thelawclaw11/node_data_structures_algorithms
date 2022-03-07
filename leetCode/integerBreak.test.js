const integerBreak = require("./integerBreak");

describe("integerBreak", () => {
    it("should", () => {
        expect(integerBreak(2)).toBe(1);
        expect(integerBreak(3)).toBe(2);

        expect(integerBreak(4)).toBe(4);
        expect(integerBreak(5)).toBe(6);
        expect(integerBreak(6)).toBe(9);

        expect(integerBreak(10)).toBe(36);
    });
});
