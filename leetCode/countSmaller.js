function countSmaller(numbers){

    const counts = Array(numbers.length).fill(0)

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if(numbers[j] < numbers[i])counts[i]++;
        }
    }

    return counts
}

console.log(countSmaller([5,2,6,1]))