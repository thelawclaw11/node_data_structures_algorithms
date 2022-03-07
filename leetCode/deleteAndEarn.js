function deleteAndEarn(numbers) {
    const sums = new Map()
    for(const num of numbers){
        if(sums.has(num)){
            sums.set(num, num + sums.get(num))
        }else{
            sums.set(num, num)
        }
    }
    const nums = []

    sums.forEach((value, key) => nums.push(key))

    nums.sort((a, b) => a - b)

    const memo = Array(nums.length).fill(null)

    const F = (i) => {
        if(i < 0){
            return 0
        }

        if(memo[i] !== null){
            return memo[i]
        }

        const cannotIncludePrevious = nums[i] - nums[i-1] === 1

        const sumIncludingCurrent = sums.get(nums[i]) + (cannotIncludePrevious ? F(i - 2) : F(i-1))

        const sumExcludingCurrent = F(i - 1)

        const result = Math.max(sumIncludingCurrent, sumExcludingCurrent)

        memo[i] = result

        return result
    };

    const result = F(nums.length - 1)

    return result
}

//console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4, 5]));
//console.log(deleteAndEarn([3, 7, 10, 5, 2, 4, 8, 9, 9, 4, 9, 2, 6, 4, 6, 5, 4, 7, 6, 10]));


function mk1(numbers) {
    const F = (nums) => {
        if (nums.length === 0) {
            return 0;
        }

        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const filteredNums = nums.filter(
                (n, index) => n !== current + 1 && n !== current - 1 && index !== i
            );
            const result = current + F(filteredNums);
            max = Math.max(max, result);
        }

        return max;
    };

    return F(numbers);
}
