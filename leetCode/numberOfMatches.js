function numberOfMatches(n) {
    let matchesCount = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            const alpha = n / 2;
            matchesCount += alpha;
            n = alpha;
        } else {
            const alpha = (n - 1) / 2;
            matchesCount += alpha;
            n = alpha + 1;
        }
    }
    return matchesCount;
}

console.log(numberOfMatches(7));
