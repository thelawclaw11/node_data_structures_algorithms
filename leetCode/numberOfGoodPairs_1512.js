const numIdenticalPairs = (nums) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let numGoodPairs = 0;
    map.forEach((value) => {
        numGoodPairs += (value * value - value) / 2;
    });
    return numGoodPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

const mk1 = (nums) => {
    let numGoodPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                numGoodPairs++;
            }
        }
    }
    return numGoodPairs;
};
