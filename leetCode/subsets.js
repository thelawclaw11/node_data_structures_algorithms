function subsets(nums){
    const result = []

    const accum = []

    function backtrack(start){
        result.push([...accum]);

        for (let i = start; i < nums.length; i++) {
            accum.push(nums[i])
            backtrack(i + 1)
            accum.pop()
        }
    }

    backtrack(0);
    return result;
}

console.log(subsets([1,2,3]))