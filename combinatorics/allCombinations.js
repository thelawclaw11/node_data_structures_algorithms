const allCombinations = (n) => {
    const combinations = [];

    const F = (accum, current) => {
        console.log(accum, current);
        if (current > n) {
            return;
        }
        combinations.push(accum);

        for (let i = current + 1; i <= n; i++) {
            F([...accum, i], i);
        }
    };

    F([], 0);

    return combinations;
};

console.log(allCombinations(4));
