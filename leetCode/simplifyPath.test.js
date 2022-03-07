const simplifyPath = require("./simplifyPath");

describe("simplifyPath", () => {
    it("should remove trailing slash", () => {
        expect(simplifyPath("/home/")).toBe("/home");
    });
    it("should remove double slashes", () => {
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    });
    it("should ", () => {
        expect(simplifyPath("/../")).toBe("/");
    });
});
