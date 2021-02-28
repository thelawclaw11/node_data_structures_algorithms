const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);

function divide(rawDividend, rawDivisor) {
    const isDivisorNegative = rawDivisor < 0;
    const isDividendNegative = rawDividend < 0;
    const dividend = Math.abs(Math.floor(rawDividend));
    const divisor = Math.abs(Math.floor(rawDivisor));

    const dp = buildDp(dividend, divisor);

    let factorCount = 0;
    let total = 0;

    for (let i = 0; i < dp.length; i++) {
        if (dividend - total >= dp[i].value) {
            total += dp[i].value;
            factorCount += dp[i].factors;
        }
    }

    factorCount = isDivisorNegative === isDividendNegative ? factorCount : -factorCount;

    factorCount = factorCount > INT_MAX ? INT_MAX : factorCount;

    factorCount = factorCount < INT_MIN ? INT_MIN : factorCount;

    return factorCount;
}

function buildDp(dividend, divisor) {
    const dp = [{ factors: 1, value: divisor }];

    while (dp[dp.length - 1].value < dividend) {
        const previous = dp[dp.length - 1];
        dp.push({ factors: previous.factors + previous.factors, value: previous.value + previous.value });
    }
    return dp.reverse();
}

function fast(dividend, divisor) {
    let tot = Math.abs(dividend);
    let div = Math.abs(divisor);
    let quo = 0;

    while (tot >= div) {
        let sum = div;
        let q = 1;
        while (sum + sum <= tot) {
            sum += sum;
            q += q;
        }
        tot -= sum;
        quo += q;
    }

    if (dividend > 0 !== divisor > 0) quo = -quo;
    return quo > -0x80000000 ? (quo < 0x7fffffff ? quo : 0x7fffffff) : -0x80000000;
}
// console.log(buildDp(8, 2));

console.log(divide(8.3, 2.7));

// console.log(divide(-2147483648, 2));
//
const assert = require("assert");

assert.deepStrictEqual(divide(-214783648, 2), -214783648 / 2);
