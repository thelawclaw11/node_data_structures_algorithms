const { findTreeCenters_peeling } = require("./findTreeCenters");

describe("find tree centers", () => {
    it("should find single center by peeling", () => {
        const graph = [[1], [2, 0], [1, 9, 3, 6], [2, 4, 5], [3], [3], [2, 7, 8], [6], [6], [2]];

        const centers = findTreeCenters_peeling(graph);

        expect(centers).toEqual([2]);
    });

    it("should find multiple centers by peeling", () => {
        const graph = [[1], [0, 3, 4], [3], [2, 6, 7, 1], [1, 5, 8], [4], [3, 9], [3], [4], [6]];
        const centers = findTreeCenters_peeling(graph);
        expect(centers).toContain(1);
        expect(centers).toContain(3);
        expect(centers).toHaveLength(2);
    });
});
