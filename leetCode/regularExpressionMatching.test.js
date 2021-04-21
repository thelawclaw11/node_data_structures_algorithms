const isMatch = require("./regularExpressionMatching");

describe("isMatch", () => {
    it("should match .", () => {
        expect(isMatch("canon", "c.non")).toBeTruthy();
        expect(isMatch("canon", "blah")).toBeFalsy();
    });

    it("should match *", () => {
        expect(isMatch("aa", "a*")).toBeTruthy();
    });

    it("three", () => {
        expect(isMatch("ab", ".*")).toBeTruthy();
    });

    it("four", () => {
        expect(isMatch("aab", "c*a*b")).toBeTruthy();
    });

    it("five", () => {
        expect(isMatch("ab", ".*c")).toBeFalsy();
    });
    it("six", () => {
        expect(isMatch("", "c*c*")).toBeTruthy();
    });
});
