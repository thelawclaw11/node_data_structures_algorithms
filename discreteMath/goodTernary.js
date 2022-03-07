const G = (n) => {
    const results = [];

    const F = (accum) => {
        if (accum.length === n) {
            results.push([...accum]);
            return;
        }

        for (let i = 0; i <= 2; i++) {
            if (accum[accum.length - 1] === 2 && i === 0) {
                continue;
            }

            accum.push(i);
            F(accum);
            accum.pop();
        }
        return;
    };

    F([]);

    return results.length;
};

const fastG = (n) => {
    const memo = new Map();
    memo.set(1, 3);
    memo.set(2, 8);

    const F = (k) => {
        if (memo.has(k)) {
            return memo.get(k);
        }

        const result = 3 * F(k - 1) - F(k - 2);
        memo.set(k, result);
        return result;
    };
    return F(n);
};

//console.log(fastG());

let misses = [];

for (let i = 1; i < 20; i++) {
    const fastGResult = fastG(i);
    const GResult = G(i);
    if (fastGResult !== GResult) {
        misses.push({
            fastGResult,
            GResult,
            i,
        });
    }
}

console.log(misses);
