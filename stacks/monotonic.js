const previousLess = (nums) => {
    const result = Array(nums.length).fill(null);

    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[i] = nums[stack[stack.length - 1]];
        }

        stack.push(i);
    }
    return result;
};

const previousLess2 = (nums) => {
    const result = Array(nums.length).fill(null);
    const stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = nums[i];
        }
        stack.push(i);
    }
    return result;
};

const nextGreater = (nums) => {
    const result = Array(nums.length).fill(null);

    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = nums[i];
        }
        stack.push(i);
    }
    return result;
};

const nextGreater2 = (nums) => {
    const result = Array(nums.length).fill(null);

    const stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[i] = nums[stack[stack.length - 1]];
        }

        stack.push(i);
    }
    return result;
};

const previousGreater = (nums) => {
    const result = Array(nums.length).fill(null);
};

// console.log(nextGreater2([3, 7, 5, 8, 4]));
// console.log(nextGreater([3, 7, 5, 8, 4]));
