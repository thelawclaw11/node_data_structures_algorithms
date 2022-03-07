function triangularNumbers(n) {
    const numbers = Array(n).fill(0);
    numbers[0] = 0;

    for (let i = 1; i <= n; i++) {
        numbers[i] = numbers[i - 1] + i;
    }

    return numbers;
}

const F = (x) => ((x ^ 2) + 2 * x + 2) / 2;

function triangularNumbers2(n) {
    const numbers = Array(n)
        .fill(0)
        .map((_, index) => index)
        .map((i) => F(i));

    return numbers;
}

function triangularNumbers3(n) {}

// function triNum(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return triNum(n - 1) + n + 1;
// }
//
// console.log(triNum(6));

console.log(triangularNumbers(6));
console.log(triangularNumbers2(6));
