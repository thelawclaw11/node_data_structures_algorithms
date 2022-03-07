const generateSquaresLessThan = (n) => {
    const squares = [];

    let i = 1;
    let nextSquare = 1;

    while (nextSquare <= n) {
        squares.push(nextSquare);
        i++;
        nextSquare = i * i;
    }

    return squares;
};

const numSquares = (n) => {
    const squares = generateSquaresLessThan(n);
    const dp = Array(n + 1).fill(Infinity);

    for (const square of squares) {
        dp[square] = 1;
    }
    dp[0] = 1;

    for (let i = 1; i < dp.length; i++) {
        let min = dp[i];
        for (const square of squares) {
            if (square > i) {
                break;
            }
            if (i - square > 0) {
                const current = dp[i - square] + 1;
                min = Math.min(min, current);
            }
        }
        dp[i] = min;
    }

    return dp[dp.length - 1];
};

console.log(numSquares(66));

module.exports = numSquares;

// const numSquares = (n) => {
//     const squares = generateSquaresLessThan(n);
//
//     const memo = new Map();
//     for (const square of squares) {
//         memo.set(square, 1);
//     }
//
//     let calls = 0;
//
//     const F = (target) => {
//         calls++;
//         if (memo.has(target)) {
//             return memo.get(target);
//         }
//
//         let min = Infinity;
//         for (const square of squares) {
//             if (square > target) {
//                 return min;
//             }
//             const current = F(target - square) + 1;
//
//             if (current < min) {
//                 min = current;
//             }
//         }
//
//         //memo.set(target, min);
//         return min;
//     };
//
//     const result = F(n);
//     console.log(memo);
//     console.log(calls);
//     return result;
// };
