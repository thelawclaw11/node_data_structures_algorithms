const HashTable = require("./openAddressing");
const faker = require("faker");
const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

describe("HashTable", () => {
    it("should insert and retrieve key", () => {
        const table = new HashTable();

        table.set("name", "Canon");
        table.set("age", 21);
        table.set("job", "programmer");
        table.set("height", 6);
        expect(table.get("name")).toBe("Canon");
        expect(table.get("age")).toBe(21);
        expect(table.get("job")).toBe("programmer");

        console.log(table);
    });

    it("should use chaining to handle many keys", () => {
        const table = new HashTable();

        const entries = [];

        for (let i = 0; i < 1000; i++) {
            const key = faker.random.alpha(10);
            const value = faker.random.alphaNumeric(20);
            table.set(key, value);
            entries.push([key, value]);
        }

        for (const [key, value] of entries) {
            expect(table.get(key)).toEqual(value);
        }
    });

    it("should grow to avoid collisions then shrink to save space", () => {
        const table = new HashTable();

        const entries = [];

        for (let i = 0; i < 1000; i++) {
            const key = faker.random.alpha(10);
            const value = faker.random.alphaNumeric(20);
            table.set(key, value);
            entries.push([key, value]);
        }

        expect(table.table.length).toBeGreaterThan(100);

        for (const [key, value] of entries) {
            expect(table.get(key)).toEqual(value);
        }

        // const largestSize = table.table.length;
        //
        // for (const [key, value] of entries.slice(0, 500)) {
        //     table.remove(key);
        // }
        //
        // console.log(table.table.length);
        //
        // expect(table.table.length).toBeLessThan(largestSize);
    });

    it("should delete key", () => {
        const table = new HashTable();
        table.set("name", "canon");
        table.set("age", 21);

        table.remove("name");
        expect(table.get("name")).toBeUndefined();
        expect(table.get("age")).toBe(21);
    });
});
