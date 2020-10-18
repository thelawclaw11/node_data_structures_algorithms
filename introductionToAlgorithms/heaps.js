const _ = require("lodash/fp");
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getLength() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    _getParentValue(childIndex) {
        return this.heap[this._getParentIndex(childIndex)];
    }

    insertMany(arrayOfNumbers) {
        for (const num of arrayOfNumbers) {
            this.insertOne(num);
        }
    }

    insertOne(number) {
        if (this.isEmpty()) {
            this.heap[0] = number;
            return number;
        }

        this.heap.push(number);
        let current = this.heap.length - 1;

        while (this.heap[current] > this._getParentValue(current) && current !== 0) {
            const temp = this.heap[current];
            const parentIndex = this._getParentIndex(current);
            const parentValue = this.heap[parentIndex];

            this.heap[current] = parentValue;
            this.heap[parentIndex] = temp;
            current = parentIndex;
        }
        return number;
    }
}

function maxHeapify(A, i = 0) {
    const leftChildIndex = getLeftChildIndex(i);
    const rightChildIndex = getRightChildIndex(i);
    let largest = i;

    if (leftChildIndex < A.length && A[leftChildIndex] > A[i]) {
        largest = leftChildIndex;
    }

    if (A[rightChildIndex] > A[largest]) {
        largest = rightChildIndex;
    }
    if (largest !== i) {
        [A[largest], A[i]] = [A[i], A[largest]];
        return maxHeapify(A, largest);
    }
}

function minHeapify(A, i = 0) {
    const leftChildIndex = getLeftChildIndex(i);
    const rightChildIndex = getRightChildIndex(i);
    let largest = i;

    if (leftChildIndex < A.length && A[leftChildIndex] < A[i]) {
        largest = leftChildIndex;
    }

    if (A[rightChildIndex] < A[largest]) {
        largest = rightChildIndex;
    }
    if (largest !== i) {
        [A[largest], A[i]] = [A[i], A[largest]];
        return minHeapify(A, largest);
    }
}

function getLeftChildIndex(parentIndex) {
    return (parentIndex + 1) * 2 - 1;
}

function getRightChildIndex(parentIndex) {
    return (parentIndex + 1) * 2;
}

function getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
}

function heapSort(array) {
    const out = [];
    const length = array.length;

    for (let i = array.length / 2; i >= 0; i--) {
        maxHeapify(array, i);
    }

    while (out.length < length) {
        out.push(array[0]);
        array[0] = array.pop();
        maxHeapify(array, 0);
    }
    return out;
}

function heapSortAsc(array) {
    const out = [];
    const length = array.length;

    for (let i = array.length / 2; i >= 0; i--) {
        minHeapify(array, i);
    }

    while (out.length < length) {
        out.push(array[0]);
        array[0] = array.pop();
        minHeapify(array, 0);
    }
    return out;
}

// const input = [3, 10, 8, 2, 7, 6, 5, 1, 9, 4]
//
// // const heap = [3, 11, 10, 6]
//
// const copy = input.slice()

// const input = generateUnsortedArray(10000000);
// const copy = input.slice();
//
// console.time("heapSort");
// heapSortAsc(input);
// console.timeEnd("heapSort");
//
// console.time("native_sort");
// copy.sort((a, b) => a - b);
//
// console.timeEnd("native_sort");
//
// function generateUnsortedArray(n) {
//     const out = [];
//
//     for (let i = 0; i <= n; i++) {
//         out.push(Math.random() * 1000000);
//     }
//     return out;
// }

//const maxHeap = new MaxHeap()

//maxHeap.insertMany(input)

// maxHeap.insert(3)
// maxHeap.insert(10)
// maxHeap.insert(8)
// maxHeap.insert(4)

//console.log(maxHeap.heap)
