const statement = require("./statement");

describe("original statement", () => {
    const plays = {
        hamlet: { name: "Hamlet", type: "tragedy" },
        "as-like": { name: "As You Like It", type: "comedy" },
        othello: { name: "Othello", type: "tragedy" },
    };

    it("should return statement", () => {
        const invoice = {
            customer: "BigCo",
            performances: [
                {
                    playID: "hamlet",
                    audience: 55,
                },
                {
                    playID: "as-like",
                    audience: 35,
                },
                {
                    playID: "othello",
                    audience: 40,
                },
            ],
        };

        const result = statement(invoice, plays);
        expect(result).toBe(
            "Statement for BigCo\n" +
                "  Hamlet: $650.00 (55 seats)\n" +
                "  As You Like It: $580.00 (35 seats)\n" +
                "  Othello: $500.00 (40 seats)\n" +
                "Amount owed is $1,730.00\n" +
                "You earned 47 credits\n"
        );
    });

    it("should return statement for small audience size", () => {
        const invoice = {
            customer: "SmallCo",
            performances: [
                {
                    playID: "hamlet",
                    audience: 5,
                },
                {
                    playID: "as-like",
                    audience: 3,
                },
                {
                    playID: "othello",
                    audience: 4,
                },
            ],
        };

        const result = statement(invoice, plays);
        expect(result).toBe(
            "Statement for SmallCo\n" +
                "  Hamlet: $400.00 (5 seats)\n" +
                "  As You Like It: $309.00 (3 seats)\n" +
                "  Othello: $400.00 (4 seats)\n" +
                "Amount owed is $1,109.00\n" +
                "You earned 0 credits\n"
        );
    });
});
