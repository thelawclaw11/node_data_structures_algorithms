function thirdMax(numbers) {
    let first = null;
    let second = null;
    let third = null;

    const set = new Set();

    for (const num of numbers) {
        if (set.has(num)) continue;
        set.add(num);
        //console.log(first, second, third);
        if (num > first || first === null) {
            third = second;
            second = first;
            first = num;
        } else if (num > second || second === null) {
            third = second;
            second = num;
        } else if (num > third || third === null) {
            third = num;
        }
    }
    return third !== null ? third : first;
}

console.log(thirdMax([1, 2, -2147483648]));

// function thirdMax(numbers) {
//     numbers.sort((a, b) => a - b);
//
//     const out = [];
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] !== numbers[i - 1]) {
//             out.push(numbers[i]);
//         }
//     }
//
//     //console.log(out);
//
//     return out[out.length - 3] !== undefined ? out[out.length - 3] : out[out.length - 1];
// }
