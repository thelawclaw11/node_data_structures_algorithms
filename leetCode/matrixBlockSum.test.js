const matrixBlockSum = require("./matrixBlockSum");

describe("matrix block sum", () => {
    it("one", () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(matrixBlockSum(input, 1)).toEqual([
            [12, 21, 16],
            [27, 45, 33],
            [24, 39, 28],
        ]);
    });

    it("two", () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(matrixBlockSum(input, 2)).toEqual([
            [45, 45, 45],
            [45, 45, 45],
            [45, 45, 45],
        ]);
    });

    it("three", () => {
        const input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];

        expect(matrixBlockSum(input, 1)).toEqual([
            [14, 24, 30, 22],
            [33, 54, 63, 45],
            [57, 90, 99, 69],
            [46, 72, 78, 54],
        ]);

        const expected = [
            [54, 78, 78, 63],
            [96, 136, 136, 108],
            [96, 136, 136, 108],
            [90, 126, 126, 99],
        ];

        const result = matrixBlockSum(input, 2);

        // console.table(result);
        // console.table(expected);

        expect(result).toEqual(expected);

        expect(matrixBlockSum(input, 3)).toEqual([
            [136, 136, 136, 136],
            [136, 136, 136, 136],
            [136, 136, 136, 136],
            [136, 136, 136, 136],
        ]);
    });
});
