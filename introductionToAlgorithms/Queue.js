class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    enqueue(value) {
        const node = new QueueNode(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue() {
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.value;
    }
}

module.exports = Queue;
