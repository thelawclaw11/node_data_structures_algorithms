const numSquares = require("./perfectSquares");

describe("perfectSquares", () => {
    it("should return minimum number of perfect squares required to sum to n", () => {
        expect(numSquares(1)).toBe(1);
        expect(numSquares(2)).toBe(2);
        expect(numSquares(3)).toBe(3);
        expect(numSquares(4)).toBe(1);
        expect(numSquares(5)).toBe(2);
        expect(numSquares(6)).toBe(3);
        expect(numSquares(7)).toBe(4);
        expect(numSquares(8)).toBe(2);
        expect(numSquares(9)).toBe(1);
        expect(numSquares(10)).toBe(2);
        expect(numSquares(11)).toBe(3);
        expect(numSquares(12)).toBe(3);
        expect(numSquares(13)).toBe(2);
    });
});
