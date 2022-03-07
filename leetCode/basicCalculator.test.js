const calculate = require("./basicCalculator");

describe("basic calculator", () => {
    it("should do basic computation", () => {
        expect(calculate("11 + 2")).toBe(13);
        expect(calculate("10 - 2")).toBe(8);
        expect(calculate("-10 + 2")).toBe(-8);
        expect(calculate("-18")).toBe(-18);
        expect(calculate("100")).toBe(100);
    });

    it("should add positive numbers", () => {
        expect(calculate("1 + 1")).toBe(2);
        expect(calculate("1+1")).toBe(2);
        expect(calculate(" 1+1 "));
        expect(calculate("1 + 2 + 3")).toBe(6);
        expect(calculate("1 + 2 + 3 + 4")).toBe(10);
    });

    it("should handle double negative", () => {
        expect(calculate("10 - - 2")).toBe(12);
    });

    it("should subtract numbers", () => {
        expect(calculate("2 - 1")).toBe(1);
        expect(calculate("2 - 10")).toBe(-8);
        expect(calculate("2 - -1")).toBe(3);
        expect(calculate("234 - 56 + 27 - -3")).toBe(208);
        expect(calculate("3 - 2 - 1")).toBe(0);
    });
    it("should handle parens", () => {
        expect(calculate("1 - (3 - (4 - 5)) + 2")).toBe(-1);
        expect(calculate("(6)")).toBe(6);
        expect(calculate("(6)-(8)")).toBe(-2);
        expect(calculate("(6)-(8)-(7)")).toBe(-9);
        expect(calculate("(6)-(8)-(7)+(1+(6))")).toBe(-2);
    });
});
