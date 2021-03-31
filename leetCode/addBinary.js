function addBinary(a, b) {
    const maxLength = Math.max(a.length, b.length);

    const aDiff = maxLength - a.length;
    const bDiff = maxLength - b.length;

    const aPad = Array(aDiff).fill("0").join("");
    const bPad = Array(bDiff).fill("0").join("");

    a = aPad + a;
    b = bPad + b;

    const out = Array(maxLength).fill("0");
    let carry = false;

    for (let i = maxLength - 1; i >= 0; i--) {
        let ones = 0;

        if (a[i] === "1") {
            ones++;
        }

        if (b[i] === "1") {
            ones++;
        }

        if (carry) {
            ones++;
        }

        if (ones === 1) {
            out[i] = "1";
            carry = false;
        } else if (ones === 2) {
            carry = true;
        } else if (ones === 3) {
            out[i] = "1";
            carry = true;
        } else {
            carry = false;
        }
    }

    if (carry) {
        out.unshift("1");
    }

    return out.join("");
}

console.log(addBinary("11", "1"));
