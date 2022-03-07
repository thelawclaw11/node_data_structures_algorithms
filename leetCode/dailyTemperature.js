const dailyTemperatures = (temps) => {
    const result = Array(temps.length).fill(0);
    const stack = [];

    for (let i = 0; i < temps.length; i++) {
        const current = temps[i];
        while (stack.length > 0 && current > temps[stack[stack.length - 1]]) {
            const previousTempIndex = stack.pop();
            result[previousTempIndex] = i - previousTempIndex;
        }
        stack.push(i);
    }
    return result;
};

//[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(mk1([73, 74, 75, 71, 69, 72, 76, 73]));

function mk1(temps) {
    const result = Array(temps.length).fill(0);

    for (let i = 0; i < temps.length; i++) {
        const current = temps[i];
        for (let j = i + 1; j < temps.length; j++) {
            if (temps[j] > current) {
                result[i] = j - i;
                break;
            }
        }
    }
    return result;
}
