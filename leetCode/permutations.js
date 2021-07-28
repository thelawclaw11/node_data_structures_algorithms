function permute(nums) {
    const permutations = [];

    dfs([], nums, permutations);
    return permutations;
}

function dfs(accum, nums, permutations) {
    if (nums.length === 0) {
        permutations.push([...accum]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        accum.push(nums[i]);
        nums.splice(i, 1);
        dfs(accum, nums, permutations);
        nums.splice(i, 0, accum.pop());
    }
}
