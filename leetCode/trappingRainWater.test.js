const { trap, makeGraph, mk1 } = require("./trappingRainWater");

describe("trap", () => {
    it("one", () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    it("two", () => {
        expect(trap([1, 2, 3, 4, 2, 0, 3, 2, 5, 4, 3, 2, 1])).toBe(9);
    });

    it("three", () => {
        const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

        expect(trap(input)).toBe(6);
    });

    it("four", () => {
        const input = [3, 2, 7, 5, 3, 0, 1, 2];

        expect(trap(input)).toBe(4);
    });

    it("five", () => {
        const input = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3];
        const slice = input.slice(11, 20);
        console.log(slice);

        expect(trap(slice)).toBe(mk1(slice));

        //expect(trap(input)).toBe(83);
    });
});
