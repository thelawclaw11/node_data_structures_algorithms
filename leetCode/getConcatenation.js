const getConcatenation = (nums) => {
    const result = Array(nums.length * 2).fill(null);

    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }

    return result;
};

console.log(getConcatenation([1, 2, 1]));

//console.log(getConcatenation([1, 2, 3]));
