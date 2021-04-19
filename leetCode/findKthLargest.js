class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(element) {
        if (this.isEmpty()) {
            this.heap.push(element);
            return;
        }

        this.heap.push(element);
        let i = this.heap.length - 1;

        while (i !== 0 && this.comparator(this.heap[i], this.heap[this._getParentIndex(i)])) {
            [this.heap[i], this.heap[this._getParentIndex(i)]] = [this.heap[this._getParentIndex(i)], this.heap[i]];
            i = this._getParentIndex(i);
        }
    }

    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.minHeapify();

        return min;
    }

    minHeapify(i = 0) {
        const leftChildIndex = this._getLeftChildIndex(i);
        const rightChildIndex = this._getRightChildIndex(i);

        let best = i;

        if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[best])) {
            best = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[best])) {
            best = rightChildIndex;
        }

        if (best !== i) {
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            this.minHeapify(best);
        }
    }

    _getLeftChildIndex(i) {
        return (i + 1) * 2 - 1;
    }
    _getRightChildIndex(i) {
        return (i + 1) * 2;
    }

    _getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
}

function findKthLargest(nums, k) {
    const Q = new PriorityQueue((a, b) => a > b);

    for (const n of nums) {
        Q.insert(n);
    }

    for (let i = 0; i < k - 1; i++) {
        Q.extract();
    }
    return Q.extract();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
