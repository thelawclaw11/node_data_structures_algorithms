const fs = require("fs");
const solveSlow = require("./solveSlow");
const maximumSum = require("./maximumSubarraySum");

describe("maximumSubarraySum", () => {
    it("should", () => {
        expect(maximumSum([3, 3, 9, 9, 5], 7)).toBe(6);
        expect(maximumSum([1, 5, 9], 5)).toBe(4);
    });
});

// function readTestCase(path) {
//     const string = fs
//         .readFileSync(__dirname + path, "utf8")
//         .split(" ")
//         .map(Number);
//     return string;
// }
