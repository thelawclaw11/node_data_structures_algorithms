const PriorityQueue = require("./PriorityQueue");

describe("Priority Queue", () => {
    it("should insert element into empty heap", () => {
        const queue = new PriorityQueue((a, b) => a < b);

        queue.insert(4);

        expect(queue.heap[0]).toBe(4);
    });

    it("should handle insert of many elements", () => {
        const queue = new PriorityQueue((a, b) => a < b);

        queue.insert(10);
        queue.insert(9);
        queue.insert(8);
        queue.insert(3);
        queue.insert(4);
        queue.insert(5);
        queue.insert(1);
        queue.insert(2);
        queue.insert(7);
        queue.insert(6);
        console.log(queue.heap);

        expect(queue.extract()).toBe(1);
        expect(queue.extract()).toBe(2);
        expect(queue.extract()).toBe(3);
        expect(queue.extract()).toBe(4);
        expect(queue.extract()).toBe(5);
        expect(queue.extract()).toBe(6);
        expect(queue.extract()).toBe(7);
        expect(queue.extract()).toBe(8);

        expect(queue.extract()).toBe(9);
        expect(queue.extract()).toBe(10);
        expect(queue.extract()).toBe(undefined);
    });
    it("should handle objects as values", () => {
        const queue = new PriorityQueue((a, b) => a.value < b.value);

        queue.insert({ value: 4 });
        queue.insert({ value: 3 });
        queue.insert({ value: 1 });
        queue.insert({ value: 2 });
        queue.insert({ value: 5 });

        expect(queue.extract()).toEqual({ value: 1 });
        expect(queue.extract()).toEqual({ value: 2 });
        expect(queue.extract()).toEqual({ value: 3 });
        expect(queue.extract()).toEqual({ value: 4 });
        expect(queue.extract()).toEqual({ value: 5 });
    });
});
