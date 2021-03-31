function bruteForce(array) {
    let iResult = 0;
    let jResult = 0;

    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
        let sum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            sum += array[j];
            if (sum > maxSum) {
                maxSum = sum;
                iResult = i;
                jResult = j;
            }
        }
    }
    //const subarray = array.slice(iResult, jResult + 1);

    console.log(iResult + " " + jResult);

    //return { maxSum, iResult, jResult, subarray };
}

function kadane(array) {
    let best = -Infinity;
    let current = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (current <= 0) {
        }
        current = Math.max(0, current + array[i]);
        best = Math.max(current, best);
    }
    return best;
}

function findMaxCrossingSubarray(array, low, mid, high) {
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let maxLeft = null;
    let sum = 0;

    for (let i = mid; i > low; i--) {
        sum += array[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }

    let maxRight = null;
    sum = 0;

    for (let i = mid + 1; i < high; i++) {
        sum += array[i];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
    }
    return leftSum + rightSum;
}

function findMaximumSubarray(array, low = 0, high = array.length - 1) {
    if (high - low <= 1) {
        return array[low];
    }

    const mid = Math.floor((low + high) / 2);
    const left = findMaximumSubarray(array, low, mid - 1);
    const right = findMaximumSubarray(array, mid + 1, high);
    const cross = findMaxCrossingSubarray(array, low, mid, high);
    return Math.max(left, right, cross);
}
// function maxSubarray(array) {
//     const [low, high, sum] = findMaximumSubarray(array);
//     return low + " " + high;
// }

const alpha = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const beta = [-1, 3, 4, -5, 9, -2];
//console.log(findMaximumSubarray(beta, 0, beta.length - 1));
console.log(findMaximumSubarray(beta));

//console.log(findMaxCrossingSubarray(beta, 0, 2, 5));

// console.log(bruteForce(alpha));
