function stoneGameII(piles) {
    const sumTable = Array(piles.length + 1);
    sumTable[0] = 0;

    for (let i = piles.length - 1; i >= 0; i--) {
        sumTable[sumTable.length - 1 - i] = piles[i] + sumTable[sumTable.length - 1 - i - 1];
    }

    const memo = new Map();

    function F(r, M) {
        if (r <= 0) {
            return 0;
        }

        const key = `${r}, ${M}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let min = Infinity;

        for (let x = 1; x <= M * 2; x++) {
            const result = F(r - x, Math.max(x, M));
            if (result < min) {
                min = result;
            }
        }

        const result = sumTable[r] - min;

        memo.set(key, result);

        return result;
    }

    return F(piles.length, 1);
}

console.log(stoneGameII([2, 7, 9, 4, 4]));
