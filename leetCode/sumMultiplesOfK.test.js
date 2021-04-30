const sumMultipleOfK = require("./sumMultipleOfK");

describe("solution", () => {
    it("one", () => {
        expect(sumMultipleOfK([23, 2, 4, 6, 7], 6)).toBe(true);
    });
    it("two", () => {
        expect(sumMultipleOfK([5, 0, 0, 0], 3)).toBe(true);
    });
    it("three", () => {
        expect(sumMultipleOfK([23, 2, 4, 6, 6], 7)).toBe(true);
    });

    it("four", () => {
        expect(sumMultipleOfK([23, 2, 6, 4, 7], 13)).toBe(false);
    });
});
