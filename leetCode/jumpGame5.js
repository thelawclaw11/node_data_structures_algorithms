function maxJumps(array, d) {
    const memo = Array(array.length).fill(null);

    function F(i) {
        if (memo[i] !== null) {
            return memo[i];
        }

        let max = 0;

        for (let j = i + 1; j < array.length && Math.abs(j - i) <= d; j++) {
            if (array[j] >= array[i]) {
                break;
            }
            const result = F(j);
            max = Math.max(result, max);
        }

        for (let j = i - 1; j >= 0 && Math.abs(j - i) <= d; j--) {
            if (array[j] >= array[i]) {
                break;
            }
            const result = F(j);
            max = Math.max(result, max);
        }

        memo[i] = max + 1;

        return memo[i];
    }

    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        const result = F(i);
        max = Math.max(result, max);
    }

    return max;
}

//console.log(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2));
console.log(maxJumps([3, 3, 3, 3, 3], 3));
