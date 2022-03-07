const calculate = require("./basicCalculator2");

describe("basicCalculator2", () => {
    it("should handle numbers", () => {
        //expect(calculate("10 + 2 * 12")).toBe(34);
        //expect(calculate("1+1+1")).toBe(3);
        // expect(calculate("3 + 2 * 4 * 5 / 2 - 6 * 8")).toBe(
        //     eval("3 + 2 * 4 * 5 / 2 - 6 * 8")
        // );
        //expect(calculate("3-2+2*4*5")).toBe(eval("3-2+2*4*5"));
        //expect(calculate("3 + 3 + 2 * 2")).toBe(10)
        // expect(calculate("3*4")).toBe(12);
        //expect(calculate("3+5*4/2")).toBe(13);
        //expect(calculate("1-1+1")).toBe(1);
    });

    it("alpha", () => {
        expect(calculate("14/3*2")).toBe(8);
    });
});
