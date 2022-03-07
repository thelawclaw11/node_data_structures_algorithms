const json = require("./json");

describe("json", () => {
    it("should parse integer", () => {
        expect(json.parse("12345")).toBe(12345);
        expect(json.parse("-54321")).toBe(-54321);
    });
    it("should parse float", () => {
        expect(json.parse("1.2345")).toBe(1.2345);
    });
    it("should parse string", () => {
        expect(json.parse('"Hello World"')).toBe("Hello World");
    });
    it("should parse boolean", () => {
        expect(json.parse("true")).toBe(true);
        expect(json.parse("false")).toBe(false);
    });
    it("should parse null", () => {
        expect(json.parse("null")).toBe(null);
    });
    it("should parse array without spaces between commas", () => {
        expect(json.parse(`[["Canon",22],["Ada",19]]`)).toEqual([
            ["Canon", 22],
            ["Ada", 19],
        ]);

        expect(json.parse("[1,2,3,4,5]")).toEqual([1, 2, 3, 4, 5]);
        expect(json.parse("[true,false,true,false]")).toEqual([
            true,
            false,
            true,
            false,
        ]);
    });
    it("should parse array with spaces between commas", () => {
        expect(json.parse("[1, 2, 3, 4, 5]")).toEqual([1, 2, 3, 4, 5]);
        expect(json.parse("[true, false, true, false]")).toEqual([
            true,
            false,
            true,
            false,
        ]);
        expect(json.parse(`[["Canon",    22   ], ["Ada",   19]]`)).toEqual([
            ["Canon", 22],
            ["Ada", 19],
        ]);
    });
    it("should parse deeply nested array", () => {
        const input = [["Canon", [22, ["Ada"]]]];
        const stringInput = JSON.stringify(input);
        expect(json.parse(stringInput)).toEqual(input);
    });
    it("should parse object", () => {
        const input = {
            name: "Canon",
            birthYear: 1999,
            hobbies: ["basketball", "coding"],
        };

        const result = json.parse(JSON.stringify(input));

        expect(result).toEqual(input);
    });

    it("should handle special characters", () => {
        const alpha = '"hello \\n world"';
        expect(json.parse(alpha)).toEqual(JSON.parse(alpha));

        // const beta = `"Hello \\"Canon\\", Hello"`;
        // console.log(JSON.parse(beta));
        // expect(json.parse(beta)).toEqual(JSON.parse(beta));
    });

    it("should handle large json structure", () => {
        const input = {
            _id: "61be8739e8a42a3119e65dc4",
            index: 0,
            guid: "7ffde774-0889-45f9-a847-2071bb5fc296",
            isActive: false,
            balance: "$3,596.33",
            picture: "http://placehold.it/32x32",
            age: 25,
            eyeColor: "green",
            name: "Joy Alvarado",
            gender: "female",
            company: "ZOLAR",
            email: "joyalvarado@zolar.com",
            phone: "+1 (857) 535-2309",
            address: "350 Legion Street, Sanborn, South Carolina, 6421",
            about: "Occaecat dolore ut enim qui id dolore. Enim et laboris dolor proident nisi adipisicing sint anim occaecat pariatur. Adipisicing in ipsum qui sit nisi mollit commodo consectetur. Non occaecat adipisicing laborum ipsum laboris sint mollit ipsum est id.\r\n",
            registered: "2019-05-19T06:22:07 +06:00",
            latitude: -26.286796,
            longitude: 144.053939,
            tags: ["voluptate", "ex", "elit", "ea", "eu", "labore", "proident"],
            friends: [
                {
                    id: 0,
                    name: "Rosemary Hensley",
                },
                {
                    id: 1,
                    name: "Wagner Alvarez",
                },
                {
                    id: 2,
                    name: "Michele Donovan",
                },
            ],
            greeting: "Hello, Joy Alvarado! You have 1 unread messages.",
            favoriteFruit: "apple",
        };

        expect(json.parse(JSON.stringify(input))).toEqual(input);
    });
});
