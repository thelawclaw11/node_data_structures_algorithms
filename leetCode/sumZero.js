const sumZero = (n) => {
    const result = [];

    let sumOfAllButOne = 0;

    for (let i = 1; i < n; i++) {
        sumOfAllButOne += i;
        result.push(i);
    }
    result.push(-sumOfAllButOne);

    return result;
};

console.log(sumZero(6));
