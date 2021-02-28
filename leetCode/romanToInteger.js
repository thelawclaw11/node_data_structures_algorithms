const numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (numeralValues[s[i]] < numeralValues[s[i + 1]]) {
            result -= numeralValues[s[i]];
        } else {
            result += numeralValues[s[i]];
        }
    }
    return result;
}
const assert = require("assert");
assert.strictEqual(romanToInt("III"), 3);

console.log(romanToInt("IV"));
