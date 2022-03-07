const sumOfUnique = (nums) => {
    const count = {};

    for (const n of nums) {
        if (n in count) {
            count[n]++;
        } else {
            count[n] = 1;
        }
    }

    let sum = 0;
    for (const n in count) {
        if (count[n] === 1) {
            sum += Number(n);
        }
    }

    return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
