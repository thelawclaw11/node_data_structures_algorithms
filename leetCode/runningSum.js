function runningSum(nums){
    const sums = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        sums.push(nums[i] + sums[i-1])
    }
    return sums
}


console.log(runningSum([1,2,3,4]))