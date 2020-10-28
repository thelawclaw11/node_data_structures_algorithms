class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(key, value) {
        const newNode = new Node(key, value);
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
    remove(key) {
        if (this.head.key === key) {
            this.head = this.head.next;
            return key;
        }

        let current = this.head;
        let previous = null;

        while (current.key !== key) {
            if (current.next === null) {
                return undefined;
            }
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        return current.key;
    }
    findByKey(key) {
        let current = this.head;

        while (current.key !== key) {
            current = current.next;
        }
        return current.value;
    }
    getEntries() {
        const entries = [];
        let current = this.head;
        while (current) {
            entries.push([current.key, current.value]);
            current = current.next;
        }
        return entries;
    }
}

class HashTable {
    constructor(size = 100) {
        console.log(size);
        this.table = Array(size).fill(null);
        this.usedSlots = 0;
    }

    grow() {
        const newTable = new HashTable(this.table.length * 2);
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (const [key, value] of this.table[i].getEntries()) {
                    newTable.set(key, value);
                }
            }
        }
        //console.log(newTable);
        this.table = newTable.table;
        this.usedSlots = newTable.usedSlots;
    }
    // shrink() {
    //     const newTable = new HashTable(Math.floor(this.table.length * 0.75));
    //
    //     for (let i = 0; i < this.table.length; i++) {
    //         if (this.table[i]) {
    //             for (const [key, value] of this.table[i].getEntries()) {
    //                 newTable.set(key, value);
    //             }
    //         }
    //     }
    //
    //     this.table = newTable.table;
    //     this.usedSlots = newTable.usedSlots;
    // }

    checkShouldResize() {
        if (this.usedSlots > this.table.length / 3) {
            this.grow();
        }
        // else if (this.usedSlots < this.table.length / 10 && this.table.length > 100) {
        //     this.shrink();
        // }
    }

    hashKey(key) {
        return multiplicationMethod(key, this.table.length);
    }

    set(key, value, shouldCheck = true) {
        const hashedKey = this.hashKey(key);

        if (!this.table[hashedKey]) {
            this.table[hashedKey] = new LinkedList();
            this.usedSlots++;
        }
        this.table[hashedKey].add(key, value);
        if (shouldCheck) {
            this.checkShouldResize();
        }
    }

    get(key) {
        const hashedKey = this.hashKey(key);
        if (this.table[hashedKey] === null) {
            return undefined;
        }

        return this.table[hashedKey].findByKey(key);
    }

    remove(key) {
        const hashedKey = this.hashKey(key);

        if (this.table[hashedKey]) {
            const removedKey = this.table[hashedKey].remove(key);
            if (this.table[hashedKey].head === null) {
                this.table[hashedKey] = null;
            }
            this.checkShouldResize();
            return removedKey;
        } else {
            this.checkShouldResize();
            return undefined;
        }
    }
}

module.exports = HashTable;

function getCharCodeSum(string) {
    let charCodeSum = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        charCodeSum += string.charCodeAt(i);
    }
    return charCodeSum;
}

function multiplicationMethod(key, tableSize) {
    const A = 0.6180339887;

    const keyString = typeof key === "number" ? String(key) : key;

    const charCodeSum = getCharCodeSum(keyString);

    return Math.floor(tableSize * ((charCodeSum * A) % 1));
}

// const keys = ["wagsovtqsa", "vjiqsoeqny", "nutvucultz", "zahokowdoy", "bybboqdmti"];
//
// keys.map((key) => console.log(multiplicationMethod(key, 100)));

//console.log(multiplicationMethod("wagsovtqsa", 100));
