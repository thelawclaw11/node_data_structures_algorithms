function jump(numbers) {
    let lastPos = numbers.length - 1;

    for (let i = numbers.length - 1; i >= 0; i--) {}

    return table[numbers.length - 1];
}

console.log(jump([2, 3, 1, 1, 4]));

function jump(numbers) {
    const table = Array(numbers.length).fill(Infinity);
    table[0] = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j <= numbers[i]; j++) {
            if (i + j < numbers.length) {
                table[i + j] = Math.min(table[i + j], table[i] + 1);
            }
        }
    }

    return table[numbers.length - 1];
}

// let lastPos = numbers.length - 1;
// for (let i = lastPos - 1; i >= 0; i--) {
//     const minRequiredJump = lastPos - i;
//     if (numbers[i] >= minRequiredJump) {
//         lastPos = i;
//     }
// }
//
// return lastPos === 0;
