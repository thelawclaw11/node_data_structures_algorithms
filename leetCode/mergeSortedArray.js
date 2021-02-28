function merge(leftRaw, leftElementCount, right, rightElementCount) {
    const merged = [];

    const left = leftRaw.slice(0, leftElementCount);

    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < left.length || rightPointer < right.length) {
        if (leftPointer >= left.length) {
            merged.push(right[rightPointer]);
            rightPointer++;
        } else if (rightPointer >= right.length) {
            merged.push(left[leftPointer]);
            leftPointer++;
        } else if (left[leftPointer] < right[rightPointer]) {
            merged.push(left[leftPointer]);
            leftPointer++;
        } else {
            merged.push(right[rightPointer]);
            rightPointer++;
        }
    }

    for (let i = 0; i < merged.length; i++) {
        leftRaw[i] = merged[i];
    }
}

const alpha = [1];

merge(alpha, 1, [], 0);
console.log(alpha);
