const MAX_SAFE_INT = Math.pow(2, 31);

function reverse(n) {
    const reversed = Number(Math.abs(n).toString().split("").reverse().join(""));

    const signed = n < 0 ? reversed * -1 : reversed;

    if (Math.abs(signed) > MAX_SAFE_INT) {
        return 0;
    }
    return signed;
}

console.log(reverse(-12345));
