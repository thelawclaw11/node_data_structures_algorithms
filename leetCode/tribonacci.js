function tribonacci(n) {
    const memo = {};
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 1;

    function inner(number) {
        if (number in memo) {
            return memo[number];
        }
        memo[number] = inner(number - 3) + inner(number - 2) + inner(number - 1);
        return memo[number];
    }

    return inner(n);
}

console.log(tribonacci(25));
