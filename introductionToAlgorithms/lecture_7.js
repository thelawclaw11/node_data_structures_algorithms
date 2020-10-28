const assert = require("assert");
function countingSort(array) {
    let max = -Infinity;

    for (const int of array) {
        if (int > max) {
            max = int;
        }
    }

    const alpha = Array(max + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
        alpha[array[i]]++;
    }

    const beta = [];
    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < alpha[i]; j++) {
            beta.push(i);
        }
    }

    return beta;
}

function generateUnsortedArray(n, max = 10000) {
    const out = [];

    for (let i = 0; i <= n; i++) {
        out.push(Math.round(Math.random() * max));
    }
    return out;
}

const input = generateUnsortedArray(100000, 10000);
//console.log(generateUnsortedArray(10, 10));

const copy = input.slice();

console.time("linear");
const linearResult = countingSort(input);
console.timeEnd("linear");
console.log(linearResult);

console.time("native");
const nativeResult = copy.sort((a, b) => a - b);
console.timeEnd("native");

assert.deepStrictEqual(linearResult, nativeResult);
