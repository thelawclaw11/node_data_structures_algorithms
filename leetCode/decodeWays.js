function numDecodings(string) {
    const digits = string.split("").map(Number);

    if (digits[0] === 0) {
        return 0;
    }

    if (digits.length === 1) {
        if (isValidSingle(digits[0])) {
            return 1;
        } else {
            return 0;
        }
    }

    const ways = Array(digits.length + 1).fill(0);
    ways[0] = 1;
    ways[1] = 1;

    for (let i = 2; i < ways.length; i++) {
        if (isValidSingle(digits[i - 1])) {
            ways[i] += ways[i - 1];
        }

        if (isValidDouble(digits[i - 2], digits[i - 1])) {
            ways[i] += ways[i - 2];
        }
    }

    function isValidSingle(a) {
        return a !== 0;
    }

    function isValidDouble(a, b) {
        if (a > 0 && a < 3) {
            return !(a === 2 && b > 6);
        } else {
            return false;
        }
    }

    return ways[ways.length - 1];
}

//console.log(numDecodings("11"));
console.log(numDecodings("06"));
//console.log(numDecodings("11111"));

function mk1(string) {
    const digits = string.split("").map(Number);
    const N = string.length;

    const memo = Array(digits.length + 1).fill(null);

    function F(n) {
        if (memo[n] !== null) {
            return memo[n];
        }

        if (n < 2) {
            if (n === 1 && !isValidSingle(digits[n - 1])) {
                return 0;
            } else {
                return 1;
            }
        }

        memo[n] =
            (isValidSingle(digits[n - 1]) ? F(n - 1) : 0) +
            (isValidDouble(digits[n - 2], digits[n - 1]) ? F(n - 2) : 0);

        return memo[n];
    }

    return F(N);

    function isValidSingle(a) {
        return a !== 0;
    }

    function isValidDouble(a, b) {
        if (a > 0 && a < 3) {
            return !(a === 2 && b > 6);
        } else {
            return false;
        }
    }
}
