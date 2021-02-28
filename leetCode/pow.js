function myPow(x, n) {
    if (n === 0) {
        return 1;
    }
    if (x === 1) {
        return x;
    }
    if (x === -1) {
        if (n % 2 === 0) {
            return 1;
        } else {
            return -1;
        }
    }

    if (n < 0) {
        return 1 / myPow(x, Math.abs(n));
    }

    const values = { 1: x };
    let highestOrder = 1;

    while (highestOrder * 2 <= n) {
        const newHighestOrder = highestOrder * 2;
        values[newHighestOrder] = values[highestOrder] * values[highestOrder];
        highestOrder = newHighestOrder;
    }

    const availableOrders = Object.keys(values).map(Number).reverse();

    let resultOrder = 0;
    let resultValue = 1;

    for (let i = 0; i < availableOrders.length; i++) {
        if (n - resultOrder >= availableOrders[i]) {
            resultValue *= values[availableOrders[i]];
            resultOrder += availableOrders[i];
        }
    }

    return resultValue;
}

console.log(myPow(2, 10));
