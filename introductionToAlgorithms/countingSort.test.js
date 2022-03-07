const countingSort = require("./countingSort");

describe("countingSort", () => {
    it("should sort numbers", () => {
        expect(countingSort([3, 3, 3, 2, 1, 4, 1, 1, 1, 2])).toEqual([
            1, 1, 1, 1, 2, 2, 3, 3, 3, 4,
        ]);
    });
});
