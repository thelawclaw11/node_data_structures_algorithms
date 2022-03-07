function createStatementData(invoice, plays) {
    const performances = invoice.performances.map((performance) =>
        enrichPerformance(performance, plays)
    );

    const statementData = {
        customer: invoice.customer,
        totalAmount: totalAmount(performances),
        totalVolumeCredits: totalVolumeCredits(performances),
        performances,
    };

    return statementData;
}

function enrichPerformance(aPerformance, plays) {
    const result = {
        ...aPerformance,
    };
    result.play = playFor(aPerformance, plays);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);

    return result;
}

function playFor(aPerformance, plays) {
    return plays[aPerformance.playID];
}

function totalAmount(performances) {
    return performances.reduce((sum, perf) => sum + amountFor(perf), 0);
}

function amountFor(aPerformance) {
    let result = 0;

    switch (aPerformance.play.type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
    return result;
}

function totalVolumeCredits(performances) {
    return performances.reduce((sum, perf) => sum + volumeCreditsFor(perf), 0);
}

function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type) {
        result += Math.floor(aPerformance.audience / 5);
    }
    return result;
}

module.exports = createStatementData;
