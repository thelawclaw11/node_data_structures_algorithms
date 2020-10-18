function sum(array){
    let out = 0
    for(const num of array){
        out+=num
    }
    return out
}

function candies(n, array) {
    const length = array.length
    const candies = Array(length).fill(1)

    for(let i = 0; i < length; i++){
        if(array[i + 1] > array[i]){
            candies[i + 1] = candies[i] + 1
        }
    }
    for(let i = length -1; i >= 0; i--){
        if(array[i-1] > array[i] && candies[i-1] <= candies[i]){
            candies[i-1] = candies[i] + 1
        }
    }

    //console.log(candies)

    return sum(candies)
}


//console.log(candies(0, [6,5,4,3,2,1]))

//console.log(candies(0, [4,6,4,5,6,2] ))
console.log(candies(0, [2,4,2,6,1,7,8,9,2,1]))