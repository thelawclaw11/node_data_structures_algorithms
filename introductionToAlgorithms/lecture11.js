function multiply(x, y) {
    let result = 0;
    const max = Math.max(x, y);
    const min = Math.min(x, y);

    for (let i = 0; i < min; i++) {
        result += max;
    }

    return result;
}

console.log(multiply(3, 5));
