function findMedianSortedArrays(A, B) {
    if (B.length < A.length) {
        const temp = A;
        A = B;
        B = temp;
    }

    const aLength = A.length;
    const bLength = B.length;

    if (A.length === 0) {
        return findMedian(B);
    }

    if (B.length === 0) {
        return findMedian(A);
    }

    const leftHalfLength = Math.floor((aLength + bLength + 1) / 2);

    let aMinCount = Math.max(leftHalfLength - bLength, 0);
    let aMaxCount = aLength;

    while (aMinCount <= aMaxCount) {
        const aCount = aMinCount + Math.floor((aMaxCount - aMinCount) / 2);
        const bCount = leftHalfLength - aCount;

        if (aCount > 0 && A[aCount - 1] > B[bCount]) {
            aMaxCount = aCount - 1;
        } else if (aCount < aLength && B[bCount - 1] > A[aCount]) {
            aMinCount = aCount + 1;
        } else {
            const leftHalfEnd =
                aCount === 0 ? B[bCount - 1] : bCount === 0 ? A[aCount - 1] : Math.max(A[aCount - 1], B[bCount - 1]);
            if ((aLength + bLength) % 2 === 1) {
                return leftHalfEnd;
            }

            const rightHalfStart =
                aCount === aLength ? B[bCount] : bCount === bLength ? A[aCount] : Math.min(A[aCount], B[bCount]);

            return (leftHalfEnd + rightHalfStart) / 2;
        }
    }
}

function findMedian(array) {
    if (array.length % 2 === 0) {
        const mid = Math.floor(array.length / 2);
        return (array[mid - 1] + array[mid]) / 2;
    } else {
        return array[Math.floor(array.length / 2)];
    }
}
//console.log(findMedian([2, 3]));

function slow(a, b) {
    const sorted = a
        .slice()
        .concat(b.slice())
        .sort((a, b) => a - b);
    return findMedian(sorted);
}

// const left = [1, 9, 20, 80, 100];
// const right = [2, 4, 6, 8, 10, 11, 12, 13];

// const left = [];
// const right = [2, 3];

const left = [2, 3, 4, 5, 6, 7, 8];
const right = [1];

console.log(findMedianSortedArrays(left, right));
console.log(slow(left, right));
