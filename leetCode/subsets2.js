function subsetsWithDup(nums){
    nums.sort((a,b) => a-b);

    const result = []
    const accum = []

    function backtrack(start){
        result.push([...accum]);
        for (let i = start; i < nums.length; i++) {
            if(i > start && nums[i] === nums[i - 1]) continue;

            accum.push(nums[i])
            backtrack(i + 1)
            accum.pop()
        }
    }

    backtrack(0);
    return result;
}

// var subsetsWithDup = function(nums) {
//     const combs = []
//     nums.sort()
//     getCombinations(0, [], nums, combs)
//     return combs
// };
//
// const getCombinations = (start, current, nums, combs) => {
//     combs.push([...current])
//     for(let i=start; i<nums.length; i++){
//         if(i>start && nums[i] === nums[i-1]) continue
//         current.push(nums[i])
//         getCombinations(i+1, current, nums, combs)
//         current.pop()
//     }
//     return
// }

console.log(subsetsWithDup([1,2, 2]))