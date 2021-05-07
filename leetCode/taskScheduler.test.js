const {
    leastInterval,
    calculateExecutionCost,
    createExecutionOrder,
    createPermutations,
    mk1,
} = require("./taskScheduler");

describe("create execution order", () => {
    it("one", () => {
        const result = createExecutionOrder(["A", "B", "A", "B", "A", "B"], 2);

        expect(result).toEqual(["A", "B", null, "A", "B", null, "A", "B"]);
    });
    it("two", () => {
        const result = createExecutionOrder(["A", "A", "A", "B", "B", "B"], 2);
        expect(result).toEqual(["A", null, null, "A", null, null, "A", "B", null, null, "B", null, null, "B"]);
    });
});

describe("count", () => {
    it("one", () => {
        expect(calculateExecutionCost(["A", "A", "A", "B", "B", "B"], 2)).toBe(14);
    });
    it("two", () => {
        expect(calculateExecutionCost(["A", "B", "A", "B", "A", "B"], 2)).toBe(8);
    });
});

describe("createPermutations", () => {
    it("one", () => {
        const result = createPermutations(["A", "A", "A", "B", "B", "B"]);
        expect(result).toHaveLength(20);
    });
});

describe("taskScheduler", () => {
    it("calculate", () => {
        const left = [["A", "A", "A", "B", "C", "A", "D", "E", "A", "F", "G", "A"], 2];
        const right = [["A", "B", "C", "A", "D", "E", "A", "F", "G", "A", "A", "A"], 2];
        expect(calculateExecutionCost(...left)).toBe(calculateExecutionCost(...right));
    });

    it("one", () => {
        expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
    });
    it("two", () => {
        const args = [["A", "A", "B", "B", "C", "C"], 2];
        expect(leastInterval(...args)).toBe(mk1(...args));
    });
    it("three", () => {
        const args = [["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2];
        expect(leastInterval(...args)).toBe(16);
    });

    it("three", () => {
        const args = [["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2];

        expect(leastInterval(...args)).toBe(mk1(...args));
    });
});
