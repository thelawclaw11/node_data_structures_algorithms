const { invest, minimumPasses, minDaysRequired } = require("./makingCandies");

describe("min days required", () => {
    it("should ");
});

describe("invest", () => {
    it("should invest with more workers than machines", () => {
        const result = invest(10, 2, 3, 1);

        expect(Math.abs(result.machinesCount - result.workersCount)).toBeLessThanOrEqual(1);
        expect(result.leftoverUnits).toBeGreaterThanOrEqual(0);
        expect(result.leftoverUnits).toBeLessThan(2);
    });

    it("should invest with more machines than workers", () => {
        const result = invest(10, 2, 0, 3);
        expect(Math.abs(result.machinesCount - result.workersCount)).toBeLessThanOrEqual(1);
        expect(result.leftoverUnits).toBeGreaterThanOrEqual(0);
        expect(result.leftoverUnits).toBeLessThan(2);
    });
    // it('should invest on 1,1,6', () => {
    //     const result = invest(6,6,1,1)
    //     expect()
    // })
});

describe("minimum passes", () => {
    it("one", () => {
        const result = minimumPasses(1, 2, 1, 60);
        expect(result).toBe(4);
    });
    it("two", () => {
        const result = minimumPasses(5184889632, 5184889632, 20, 10000);
        expect(result).toBe(1);
    });
    it("three", () => {
        const result = minimumPasses(3, 1, 2, 12);
        expect(result).toBe(3);
    });
    it("four", () => {
        const result = minimumPasses(1, 1, 6, 45);
        expect(result).toBe(16);
    });
    it("five", () => {
        const result = minimumPasses(1, 1, 1000000000000, 1000000000000);
        console.log(result);
        expect(result).toBe(1000000000000);
    });
    it("six", () => {
        const result = minimumPasses(1, 100, 10000000000, 1000000000000);
        expect(result).toBe(617737754);
    });
});
