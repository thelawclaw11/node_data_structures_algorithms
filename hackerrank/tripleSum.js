function sortUniq(array){
    const sorted = array.sort((a,b) => a - b)
    const out = [sorted[0]]

    for(let i = 1; i < sorted.length; i++){
        if(sorted[i] !== sorted[i-1]){
            out.push(sorted[i])
        }
    }

    return out
}

function triplets(rA, rB, rC) {
    const a = sortUniq(rA)
    const b = sortUniq(rB)
    const c = sortUniq(rC)

    const dp = []
    let aPointer = 0
    let numABehind = 0

    let cPointer = 0
    let numCBehind = 0



    for(let i = 0; i < b.length; i++){

        while(a[aPointer] <= b[i]){
            numABehind++
            aPointer++
        }
        while(c[cPointer] <= b[i]){
            numCBehind++
            cPointer++
        }
        if(i === 0){
            dp[i] = numABehind *numCBehind
        }else{
            dp[i] = numABehind * numCBehind + dp[i - 1]
        }
    }

    // console.log(dp)

  return dp[b.length-1]
}

const case1 = [
  [3, 5, 7],
  [3, 6],
  [4, 6, 9],
];

const case2 = [
    [1,4,5],
    [2,3,3],
    [1,2,3]
]

console.log(triplets(...case2));
