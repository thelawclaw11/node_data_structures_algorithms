const minDistance = require("./editDistance");

describe("min distance", () => {
    it("should compute edit distance", () => {
        expect(minDistance("horse", "ros")).toBe(3);
        expect(minDistance("geek", "gesek")).toBe(1);
        expect(minDistance("cat", "cut")).toBe(1);
        expect(minDistance("sunday", "saturday")).toBe(3);
    });

    it("should be efficient", () => {
        minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine");
    });
});
