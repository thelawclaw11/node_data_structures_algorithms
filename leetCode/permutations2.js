// function permuteUnique(nums){
//     nums.sort(((a, b) => a-b))
//     const length = nums.length
//     const permutations = [];
//
//     function backtrack(accum){
//
//         if(accum.length === length){
//             permutations.push([...accum])
//             return
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if(nums[i] === nums[i-1]){
//                 continue
//             }
//             accum.push(nums[i]);
//             nums.splice(i, 1);
//             backtrack(accum);
//             nums.splice(i, 0, accum.pop());
//         }
//
//     }
//
//     backtrack([], nums);
//     return permutations
// }

function permuteUnique(nums){
    const results = [];

    const counter = new Map();

    for(const num of nums){
        if(counter.has(num)){
            counter.set(num, counter.get(num) + 1)
        }else{
            counter.set(num, 1)
        }
    }

    const N = nums.length;
    const accum = [];

    function backtrack(){
        if(accum.length === N){
            results.push([...accum]);
        }

        counter.forEach((count, num) =>{
            if(count !== 0){
                accum.push(num);
                counter.set(num, count - 1);
                backtrack();
                accum.pop();
                counter.set(num, count);
            }
        })


    }

    backtrack();
    return results
}




//console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([3,3,0,3]))