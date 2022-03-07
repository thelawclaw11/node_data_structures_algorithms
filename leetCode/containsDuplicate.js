const containsDuplicate = (numbers) => {
    const set = new Set();

    for (const n of numbers) {
        if (set.has(n)) {
            return true;
        } else {
            set.add(n);
        }
    }
    return false;
};

//true
console.log(containsDuplicate([1, 2, 3, 1]));

//false
console.log(containsDuplicate([1, 2, 3, 4]));
