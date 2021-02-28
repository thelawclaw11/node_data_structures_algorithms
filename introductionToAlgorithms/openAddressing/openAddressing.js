class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

function getCharCodeSum(string) {
    let charCodeSum = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        charCodeSum += string.charCodeAt(i);
    }
    return charCodeSum;
}

function hash(key, tableSize) {
    return Math.floor(getCharCodeSum(key) % tableSize);
}

class OaHashTable {
    constructor() {
        this.table = 701;
    }

    set(key, value) {
        // let i = 0
        //
        // const hashedKey = hash(key, )
    }

    get() {}

    remove() {}
}

module.exports = OaHashTable;
