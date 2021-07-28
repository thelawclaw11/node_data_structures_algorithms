const sorting = require("./sorting");

describe("sorting", () => {
    it("should do mergeSort", () => {
        const input = [8, 3, 2, 6, 7, 0, 9, 1, 5, 4];

        expect(sorting.mergeSort([...input])).toEqual(sorting.jsSort([...input]));
    });

    it("should do selection sort", () => {
        const input = [8, 3, 2, 6, 7, 0, 9, 1, 5, 4];

        expect(sorting.selectionSort([...input])).toEqual(sorting.jsSort([...input]));
    });
});
