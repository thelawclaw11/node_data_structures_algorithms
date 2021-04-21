function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        },
    };
    return rangeIterator;
}

const iterator = makeRangeIterator(1, 10);

// let result = iterator.next();
// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }

// function* _makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//         iterationCount++;
//         yield i;
//     }
//     return iterationCount;
// }

// function* generator(i) {
//     yield i;
//     yield i + 10;
// }
//
// const gen = generator(10);
//
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* idMaker() {
//     let index = 0;
//     while (true) {
//         yield index++;
//     }
// }
//
// const gen = idMaker();
//
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
// }
//
// function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
// }
//
// const gen = generator(10);
//
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            //current.next is equal to null
            current.next = newNode;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;

        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

for (const n of list) {
    console.log(n);
}

// function* range(start, end) {
//     let index = start;
//     while (index < end) {
//         index++;
//         yield index;
//     }
// }
//
// for (const n of range(0, 10)) {
//     console.log(n);
// }
//
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
