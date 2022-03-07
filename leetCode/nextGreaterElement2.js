const nextGreaterElements = (nums) => {
    const result = Array(nums.length).fill(-1);
    const stack = [];
    const top = () => stack[stack.length - 1];

    let i = 0;
    let timesRound = 0;
    while (timesRound < 2) {
        while (stack.length > 0 && nums[i] > nums[top()]) {
            const previousIndex = stack.pop();
            result[previousIndex] = nums[i];
        }
        stack.push(i);

        if (i === nums.length - 1) {
            i = 0;
            timesRound++;
        } else {
            i++;
        }
    }
    return result;
};

// console.log(nextGreaterElements([1, 2, 1]));
// console.log(mk1([1, 2, 1]));

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
console.log(mk1([1, 2, 3, 4, 3]));

function mk1(nums) {
    const result = Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (j !== i) {
            if (nums[j] > nums[i]) {
                result[i] = nums[j];
                break;
            }

            if (j >= nums.length - 1) {
                j = 0;
            } else {
                j++;
            }
        }
    }
    return result;
}
