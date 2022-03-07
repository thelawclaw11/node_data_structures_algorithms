const sumSubarrayMins = (nums) => {
    nums.push(-Infinity);
    let sum = 0;
    const stack = [];

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        const currentValue = nums[currentIndex];
        let currentReplacedCount = 0;

        while (stack.length > 0 && currentValue < stack[stack.length - 1].value) {
            const top = stack.pop();
            currentReplacedCount += 1 + top.replacedCount;

            const distance = currentIndex - top.index;

            sum += distance * top.value + distance * top.value * top.replacedCount;
        }

        stack.push({
            value: currentValue,
            index: currentIndex,
            replacedCount: currentReplacedCount,
        });
    }

    return sum % (Math.pow(10, 9) + 7);
};

console.log(2508796223 % (Math.pow(10, 9) + 7));

//17
console.log(sumSubarrayMins([3, 1, 2, 4]));
//35
console.log(sumSubarrayMins([2, 4, 5, 3, 1]));

const mk1 = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let min = Infinity;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            sum += min;
        }
    }

    return sum;
};
