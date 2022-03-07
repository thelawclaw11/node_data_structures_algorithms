const isValid = require("./validParentheses");

describe("isValid", () => {
    it("should validate parentheses", () => {
        expect(isValid("()")).toBeTruthy();
        expect(isValid("(()")).toBeFalsy();
        expect(isValid("))")).toBeFalsy();
        expect(isValid("((")).toBeFalsy();
        expect(isValid("())")).toBeFalsy();
    });

    it("should validate brackets too", () => {
        expect(isValid("([])")).toBeTruthy();
        expect(isValid("([)")).toBeFalsy();
    });
});

// expect(isValid("(]")).toBeFalsy();
// expect(isValid("([)")).toBeFalsy();
// expect(isValid("([]())")).toBeTruthy();
// expect(isValid("([])")).toBeTruthy();
