const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class CanonQueue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
//
//     isEmpty() {
//         return this.head === null;
//     }
//
//     enqueue(value) {
//         const node = new QueueNode(value);
//
//         if (this.head === null) {
//             this.head = node;
//             this.tail = node;
//         }
//         this.tail.next = node;
//         this.tail = node;
//     }
//
//     dequeue() {
//         const oldHead = this.head;
//         this.head = this.head.next;
//         return oldHead.value;
//     }
//
//     front() {}
//
//     back() {}
// }

function maxSlidingWindow(numbers, k) {}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

function mk1(numbers, k) {
    const result = [];

    for (let i = 0; i + k <= numbers.length; i++) {
        let max = -Infinity;
        for (let j = i; j < numbers.length && j < i + k; j++) {
            max = Math.max(max, numbers[j]);
        }
        result.push(max);
    }
    return result;
}

function mk2(numbers, k) {
    const result = [];

    const queue = new MaxPriorityQueue({ priority: (el) => el.value });

    for (let j = 0; j < k; j++) {
        queue.enqueue({ index: j, value: numbers[j] });
    }

    let i = k - 1;
    while (i < numbers.length) {
        while (queue.front() && queue.front().element.index <= i - k) {
            queue.dequeue();
        }
        queue.enqueue({ index: i, value: numbers[i] });
        result.push(queue.front().element.value);
        i++;
    }

    return result;
}

// const DoublyLinkedListNode = require("./doublyLinkedListNode");
//
// /**
//  * @class
//  */
// class DoublyLinkedList {
//     constructor() {
//         this._head = null;
//         this._tail = null;
//         this._count = 0;
//     }
//
//     /**
//      * Adds a node at the beginning of the list.
//      * @public
//      * @param {any} value
//      * @returns {DoublyLinkedListNode}
//      */
//     insertFirst(value) {
//         const newNode = new DoublyLinkedListNode(value);
//
//         if (this.isEmpty()) {
//             this._head = newNode;
//             this._tail = newNode;
//         } else {
//             this._head.setPrev(newNode);
//             newNode.setNext(this._head);
//             this._head = newNode;
//         }
//         this._count += 1;
//         return newNode;
//     }
//
//     /**
//      * Adds a node at the end of the list.
//      * @public
//      * @param {any} value
//      * @returns {DoublyLinkedListNode}
//      */
//     insertLast(value) {
//         const newNode = new DoublyLinkedListNode(value);
//         if (this.isEmpty()) {
//             this._head = newNode;
//             this._tail = newNode;
//         } else {
//             newNode.setPrev(this._tail);
//             this._tail.setNext(newNode);
//             this._tail = newNode;
//         }
//         this._count += 1;
//         return newNode;
//     }
//
//     /**
//      * Adds a node at a specific position.
//      * @public
//      * @param {number} position
//      * @param {any} value
//      * @returns {DoublyLinkedListNode}
//      */
//     insertAt(position, value) {
//         if (Number.isNaN(+position) || position < 0 || position > this._count) {
//             throw new Error(".insertAt expects a position num <= linked list size");
//         }
//
//         if (position === 0) {
//             return this.insertFirst(value);
//         }
//
//         if (position === this._count) {
//             return this.insertLast(value);
//         }
//
//         let currentPosition = 1;
//         let prev = this._head;
//         while (currentPosition < position) {
//             currentPosition += 1;
//             prev = prev.getNext();
//         }
//
//         const newNode = new DoublyLinkedListNode(value);
//         newNode.setNext(prev.getNext());
//         newNode.setPrev(prev);
//         newNode.getNext().setPrev(newNode);
//         newNode.getPrev().setNext(newNode);
//         this._count += 1;
//         return newNode;
//     }
//
//     /**
//      * Removes the head node.
//      * @public
//      * @returns {DoublyLinkedListNode|null}
//      */
//     removeFirst() {
//         if (this.isEmpty()) return null;
//
//         const removedNode = this._head;
//         if (this._head.hasNext()) {
//             this._head = this._head.getNext();
//             this._head.setPrev(null);
//         } else {
//             this._head = null;
//             this._tail = null;
//         }
//         this._count -= 1;
//         return removedNode.setNext(null);
//     }
//
//     /**
//      * Removes the tail node.
//      * @public
//      * @returns {DoublyLinkedListNode|null}
//      */
//     removeLast() {
//         if (this.isEmpty()) return null;
//
//         const removedNode = this._tail;
//         if (this._tail.hasPrev()) {
//             this._tail = this._tail.getPrev();
//             this._tail.setNext(null);
//         } else {
//             this._head = null;
//             this._tail = null;
//         }
//         this._count -= 1;
//         return removedNode.setPrev(null);
//     }
//
//     /**
//      * Removes a node in a specific position.
//      * @public
//      * @param {number} position
//      * @returns {DoublyLinkedListNode|null}
//      */
//     removeAt(position) {
//         if (Number.isNaN(+position) || position < 0 || position >= this._count) {
//             return null;
//         }
//
//         if (position === 0) {
//             return this.removeFirst();
//         }
//
//         if (position === this._count - 1) {
//             return this.removeLast();
//         }
//
//         let currentPosition = 1;
//         let current = this._head.getNext();
//         while (currentPosition < position) {
//             currentPosition += 1;
//             current = current.getNext();
//         }
//         return this.remove(current);
//     }
//
//     /**
//      * Removes a node from the list by its reference.
//      * @public
//      * @param {DoublyLinkedListNode} node
//      * @returns {DoublyLinkedListNode}
//      */
//     remove(node) {
//         if (node && !(node instanceof DoublyLinkedListNode)) {
//             throw new Error("remove: expects a DoublyLinkedListNode node");
//         }
//
//         if (!node) {
//             return null;
//         }
//
//         if (!node.hasPrev()) {
//             return this.removeFirst();
//         }
//
//         if (!node.hasNext()) {
//             return this.removeLast();
//         }
//
//         node.getPrev().setNext(node.getNext());
//         node.getNext().setPrev(node.getPrev());
//         this._count -= 1;
//         return node.setPrev(null).setNext(null);
//     }
//
//     /**
//      * Removes all nodes based on a callback.
//      * @public
//      * @param {function} cb
//      * @returns {number} number of removed nodes
//      */
//     removeEach(cb) {
//         if (typeof cb !== "function") {
//             throw new Error(".removeEach(cb) expects a callback");
//         }
//
//         let removedCount = 0;
//         let position = 0;
//         let current = this._head;
//         while (current instanceof DoublyLinkedListNode) {
//             if (cb(current, position)) {
//                 const next = current.getNext();
//                 this.remove(current);
//                 removedCount += 1;
//                 current = next;
//             } else {
//                 current = current.getNext();
//             }
//             position += 1;
//         }
//         return removedCount;
//     }
//
//     /**
//      * Traverses the list from beginning to end.
//      * @public
//      * @param {function} cb
//      */
//     forEach(cb) {
//         if (typeof cb !== "function") {
//             throw new Error(".forEach(cb) expects a callback");
//         }
//
//         let current = this._head;
//         let position = 0;
//         while (current instanceof DoublyLinkedListNode) {
//             cb(current, position);
//             position += 1;
//             current = current.getNext();
//         }
//     }
//
//     /**
//      * Traverses the list backward from end to beginning
//      * @public
//      * @param {function} cb
//      */
//     forEachReverse(cb) {
//         if (typeof cb !== "function") {
//             throw new Error(".forEachReverse(cb) expects a callback");
//         }
//
//         let current = this._tail;
//         let position = this._count - 1;
//         while (current instanceof DoublyLinkedListNode) {
//             cb(current, position);
//             position -= 1;
//             current = current.getPrev();
//         }
//     }
//
//     /**
//      * Finds a node in the list using a callback
//      * @public
//      * @param {function} cb
//      * @returns {DoublyLinkedListNode|null}
//      */
//     find(cb) {
//         if (typeof cb !== "function") {
//             throw new Error(".find(cb) expects a callback");
//         }
//
//         let current = this._head;
//         while (current instanceof DoublyLinkedListNode) {
//             if (cb(current)) {
//                 return current;
//             }
//             current = current.getNext();
//         }
//         return null;
//     }
//
//     /**
//      * Filters the list based on a callback.
//      * @public
//      * @param {function} cb
//      * @returns {LinkedList}
//      */
//     filter(cb) {
//         if (typeof cb !== "function") {
//             throw new Error(".filter(cb) expects a callback");
//         }
//
//         const result = new DoublyLinkedList();
//         this.forEach((node, position) => {
//             if (!cb(node, position)) return;
//             result.insertLast(node.getValue());
//         });
//         return result;
//     }
//
//     /**
//      * Returns the head node.
//      * @public
//      * @returns {DoublyLinkedListNode}
//      */
//     head() {
//         return this._head;
//     }
//
//     /**
//      * Returns the tail node.
//      * @public
//      * @returns {DoublyLinkedListNode}
//      */
//     tail() {
//         return this._tail;
//     }
//
//     /**
//      * Returns the nodes count in the list.
//      * @public
//      * @returns {number}
//      */
//     count() {
//         return this._count;
//     }
//
//     /**
//      * Converts the doubly linked list into an array.
//      * @public
//      * @returns {array}
//      */
//     toArray() {
//         const result = [];
//         this.forEach((node) => result.push(node.getValue()));
//         return result;
//     }
//
//     /**
//      * Checks if the list is empty.
//      * @public
//      * @returns {boolean}
//      */
//     isEmpty() {
//         return this._head === null;
//     }
//
//     /**
//      * Clears the list
//      * @public
//      */
//     clear() {
//         this._head = null;
//         this._tail = null;
//         this._count = 0;
//     }
// }
//
// class DoublyLinkedListNode {
//     /**
//      * Creates a doubly linked list node.
//      * @param {any} value
//      * @param {DoublyLinkedListNode} [prev]
//      * @param {DoublyLinkedListNode} [next]
//      */
//     constructor(value, prev, next) {
//         this._value = value;
//         this.setPrev(prev);
//         this.setNext(next);
//     }
//
//     /**
//      * @public
//      * @param {object} value
//      */
//     setValue(value) {
//         this._value = value;
//         return this;
//     }
//
//     /**
//      * @public
//      * @returns {object}
//      */
//     getValue() {
//         return this._value;
//     }
//
//     /**
//      * @public
//      * @param {DoublyLinkedListNode} [next]
//      * @returns {DoublyLinkedList}
//      */
//     setNext(next) {
//         if (next && !(next instanceof DoublyLinkedListNode)) {
//             throw new Error("setNext expects a DoublyLinkedListNode or null");
//         }
//         this._next = next || null;
//         return this;
//     }
//
//     /**
//      * @public
//      * @returns {DoublyLinkedListNode}
//      */
//     getNext() {
//         return this._next;
//     }
//
//     /**
//      * @public
//      * @returns {boolean}
//      */
//     hasNext() {
//         return this._next instanceof DoublyLinkedListNode;
//     }
//
//     /**
//      * @public
//      * @param {DoublyLinkedListNode} [prev]
//      * @returns {DoublyLinkedList}
//      */
//     setPrev(prev) {
//         if (prev && !(prev instanceof DoublyLinkedListNode)) {
//             throw new Error("setPrev expects a DoublyLinkedListNode or null");
//         }
//         this._prev = prev || null;
//         return this;
//     }
//
//     /**
//      * @public
//      * @returns {DoublyLinkedListNode}
//      */
//     getPrev() {
//         return this._prev;
//     }
//
//     /**
//      * @public
//      * @returns {boolean}
//      */
//     hasPrev() {
//         return this._prev instanceof DoublyLinkedListNode;
//     }
// }
