function cutRod(rodLength, prices) {
    const dp = Array(rodLength + 1).fill(0);
    const cuts = Array(dp.length).fill(null);

    for (let i = 1; i < dp.length; i++) {
        let max = 0;
        let distance = 0;

        for (let length = 1; length < prices.length; length++) {
            if (i - length >= 0) {
                const price = prices[length];

                const sum = dp[i - length] + price;
                if (sum > max) {
                    max = sum;
                    distance = length;
                }
            } else {
                break;
            }
        }
        cuts[i] = distance;
        dp[i] = max;
    }
    const path = [];
    let pointer = cuts.length - 1;
    while (pointer > 0) {
        const cut = cuts[pointer];
        path.push(cut);
        pointer -= cut;
    }

    return { price: dp[dp.length - 1], cuts: path };
}

const result = cutRod(4, [0, 1, 5, 8, 9, 10, 17, 17, 20]);
console.log(result);

module.exports = cutRod;
