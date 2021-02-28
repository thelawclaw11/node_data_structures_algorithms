function maxArea(array) {
    let res = 0;
    let l = 0;
    let r = array.length - 1;

    while (l < r) {
        const area = (r - l) * Math.min(array[l], array[r]);
        res = Math.max(res, area);

        if (array[l] < array[r]) {
            l += 1;
        } else {
            r -= 1;
        }
    }
    return res;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// function maxArea(array) {
//     let largest = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             largest = Math.max(largest, (j - i) * Math.min(array[i], array[j]));
//         }
//     }
//     return largest;
// }
