const subArrayRanges = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let min = Infinity;
        let max = -Infinity;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            const rangeDif = max - min;
            sum += rangeDif;
        }
    }
    return sum;
};

//4
console.log(subArrayRanges([1, 2, 3]));
//22
console.log(subArrayRanges([1, 2, 3, 1, 4]));
//10
console.log(subArrayRanges([1, 2, 3, 1]));
//15
console.log(subArrayRanges([1, 2, 3, 2, 1]));
