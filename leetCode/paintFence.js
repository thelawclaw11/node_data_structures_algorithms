function numWays(n, k) {
    if (n === 0) return 0;
    if (n === 1) return k;
    if (n === 2) return k * k;

    const table = Array(n + 1).fill(0);
    table[0] = 0;
    table[1] = k;
    table[2] = k * k;

    for (let i = 3; i <= n; i++) {
        table[i] = (k - 1) * (table[i - 1] + table[i - 2]);
    }

    return table[n];
}

function mk3(n, k) {
    const memo = {};

    function F(i) {
        if (i === 0) return 0;
        if (i === 1) return k;
        if (i === 2) return k * k;

        if (i in memo) {
            return memo[i];
        }

        const result = (k - 1) * (F(i - 1) + F(i - 2));

        memo[i] = result;
        return result;
    }

    return F(n);
}

function mk2(n, k) {
    const memo = {};

    function F(i, lastColor) {
        if (i === 0) return 0;
        if (i === 1) return 1;

        if (i in memo) {
            return memo[i];
        }

        let sum = 0;

        for (let j = 1; j <= k; j++) {
            if (j === lastColor) continue;

            sum += F(i - 1, j) + F(i - 2, j);
        }

        memo[i] = sum;
        return sum;
    }

    const result = F(n + 1, null);

    return result;
}
const alpha = [4, 3];

const beta = [2, 46340];

const chosen = alpha;

const left = mk3(...chosen);

const right = numWays(...chosen);
console.log(right);
console.log(left);

console.log(left === right);

// console.log(mk1(2, 2));
//
// //console.log(result.length);
//
// function mk1(n, k) {
//     const accum = [];
//
//     function backTrack(remaining) {
//         if (
//             accum[accum.length - 1] !== undefined &&
//             accum[accum.length - 2] !== undefined &&
//             accum[accum.length - 3] !== undefined &&
//             accum[accum.length - 1] === accum[accum.length - 2] &&
//             accum[accum.length - 2] === accum[accum.length - 3]
//         ) {
//             return 0;
//         }
//
//         if (remaining === 0) {
//             return 1;
//         }
//
//         let sum = 0;
//         for (let i = 1; i <= k; i++) {
//             accum.push(i);
//             sum += backTrack(remaining - 1);
//             accum.pop();
//         }
//         return sum;
//     }
//
//     return backTrack(n, k);
// }
