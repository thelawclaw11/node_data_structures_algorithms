function maximum69Number(num) {
    const string = num.toString();

    const digits = string.split("");

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === "6") {
            digits[i] = "9";
            break;
        }
    }
    return Number(digits.join(""));
}

console.log(maximum69Number(9669));
