const finalPrices = (prices) => {
    const result = prices.slice();

    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];
        while (stack.length > 0 && current <= prices[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = prices[topIndex] - current;
        }

        stack.push(i);
    }

    while (stack.length > 0) {
        const topIndex = stack.pop();
        result[topIndex] = prices[topIndex];
    }

    return result;
};

//[9, 0, 1, 6]
// console.log(finalPrices([10, 1, 1, 6]));

//[4,2,4,2,3]
console.log(finalPrices([8, 4, 6, 2, 3]));
