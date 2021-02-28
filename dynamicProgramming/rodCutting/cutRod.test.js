const cutRod = require("./cutRod");

describe("rod cutting", () => {
    it("one", () => {
        const result = cutRod(4, [0, 1, 5, 8, 9, 10, 17, 17, 20]);

        expect(result).toEqual(10);
    });
});
