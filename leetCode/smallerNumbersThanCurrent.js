function smallerNumbersThanCurrent(numbers){
    const count = Array(101).fill(0)
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        count[numbers[i]]++;
    }

    for (let i = 1; i <= 100; i++) {
        count[i] += count[i - 1];
    }

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            result.push(0);
        }else {
            result.push(count[numbers[i] - 1]);
        }
    }

    return result
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))