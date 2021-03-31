function combinationSum3(k, n) {
    const combinations = [];

    function backTrack(accum, remain, start) {
        if (accum.length > k) return;
        if (remain < 0) return;

        if (accum.length === k && remain === 0) {
            combinations.push([...accum]);
            return;
        }

        for (let num = start; num <= 9; num++) {
            accum.push(num);
            backTrack(accum, remain - num, num + 1);
            accum.pop();
        }
    }

    backTrack([], n, 1);
    return combinations;
}

console.log(combinationSum3(3, 7));
