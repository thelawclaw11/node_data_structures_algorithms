function shuffle(nums, n){
    const result = []

    for (let i = 0; i < n; i++) {
        result.push(nums[i])
        result.push(nums[n + i])
    }

    return result
}

console.log(shuffle([1,3,5,7,2,4,6,8],4));
