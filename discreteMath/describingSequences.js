const A = (n) => Math.pow(2, n - 1) + 3;

const oneTo = (n) =>
    Array(n)
        .fill(0)
        .map((_, i) => i + 1);
//
// console.log(oneTo(6).map(A));

const B = (n) => n * n - 1;

console.log(oneTo(6).map(B));

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += 1 / Math.pow(i, 3);
}

console.log(sum);
