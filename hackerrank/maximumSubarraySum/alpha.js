function maximumSum(array, mod) {
    const length = array.length;
    const prefix = Array(length).fill(0);

    prefix[0] = array[0];

    for (let i = 1; i < length; i++) {
        prefix[i] = (prefix[i - 1] + array[0] + mod) % mod;
    }

    console.log(prefix);

    return result;
}
console.log(maximumSum([3, 3, 9, 9, 5], 7));
console.log(maximumSum([1, 5, 9], 5));
