const removeOuterParentheses = require("./removeOuterParentheses");

describe("all", () => {
    it("should do it", () => {
        expect(removeOuterParentheses("(()())(())")).toBe("()()()");
        expect(removeOuterParentheses("(()())(())(()(()))")).toBe(
            "()()()()(())"
        );
        expect(removeOuterParentheses("()()")).toBe("");
    });
});
