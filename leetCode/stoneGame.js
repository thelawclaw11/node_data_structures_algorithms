// function stoneGame(piles) {
//     const N = piles.length;
//
//     const dp = Array(N + 2)
//         .fill(0)
//         .map(() => Array(N + 2).fill(null));
//
//     for (let size = 1; size <= N; size++) {
//         for (let i = 0, j = size - 1; j < N; i++, j++) {
//             let parity = (j + 1 + N) % 2;
//             if (parity === 1) {
//                 dp[i + 1][j + 1] = Math.max(piles[i] + dp[i + 2][j + 1], piles[j] + dp[i + 1][j]);
//             } else {
//                 dp[i + 1][j + 1] = Math.min(-piles[i] + dp[i + 2][j + 1], -piles[j] + dp[i + 1][j]);
//             }
//         }
//     }
//     return dp[1][N] > 0;
// }

function stoneGame(piles) {
    const memo = Array(piles.length)
        .fill(0)
        .map(() => Array(piles.length).fill(null));

    const prefixSums = buildPrefixSums(piles);

    function F(l, r) {
        if (memo[l][r] !== null) {
            return memo[l][r];
        }

        if (l === r) {
            return piles[l];
        }

        const pilesSum = retrievePrefixSum(prefixSums, l, r);

        const result = Math.max(pilesSum - F(l + 1, r), pilesSum - F(l, r - 1));

        memo[l][r] = result;

        return result;
    }

    const s = retrievePrefixSum(prefixSums, 0, piles.length - 1);

    const A = F(0, piles.length - 1);

    return A > s - A;
}

function buildPrefixSums(array) {
    const table = Array(array.length + 1).fill(0);
    table[0] = 0;

    for (let i = 1; i < array.length + 1; i++) {
        table[i] = table[i - 1] + array[i - 1];
    }

    return table;
}

function retrievePrefixSum(table, l, r) {
    return table[r + 1] - table[l];
}

console.log(
    stoneGame([
        7,
        7,
        12,
        16,
        41,
        48,
        41,
        48,
        11,
        9,
        34,
        2,
        44,
        30,
        27,
        12,
        11,
        39,
        31,
        8,
        23,
        11,
        47,
        25,
        15,
        23,
        4,
        17,
        11,
        50,
        16,
        50,
        38,
        34,
        48,
        27,
        16,
        24,
        22,
        48,
        50,
        10,
        26,
        27,
        9,
        43,
        13,
        42,
        46,
        24,
    ])
);
