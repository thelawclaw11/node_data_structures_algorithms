const F = (n) => {
    let sum = 0;

    for (let k = 0; k < n; k++) {
        const number = 4 + k * 7;
        console.log(number);
        sum += number;
    }
    return sum;
};
console.log(5 * ((1 + Math.pow(3, 21)) / 2));
