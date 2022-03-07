const sum = (array) => array.reduce((state, current) => state + current, 0);

const sums = (target, numbers) => {
    const frequencyTable = new Map();

    numbers.forEach((number) => {
        if (frequencyTable.has(number)) {
            frequencyTable.set(number, frequencyTable.get(number) + 1);
        } else {
            frequencyTable.set(number, 1);
        }
    });

    const results = [];

    const uniqueNumbers = Array.from(new Set(numbers));

    const F = (accum) => {
        if (sum(accum) === target) {
            results.push([...accum]);
            return;
        }

        if (sum(accum) > target) {
            return;
        }

        uniqueNumbers.forEach((uniqueNumber) => {
            if (frequencyTable.get(uniqueNumber) > 0) {
                accum.push(uniqueNumber);
                frequencyTable.set(uniqueNumber, frequencyTable.get(uniqueNumber) - 1);
                F(accum);
                accum.pop();
                frequencyTable.set(uniqueNumber, frequencyTable.get(uniqueNumber) + 1);
            }
        });
    };

    F([]);

    return results;
};

// console.log(sums(5, [1, 1, 2, 2]));
//console.log(sums(15, [2, 3, 4, 5, 5, 5, 6, 23, 89]));

const mk1 = (target, numbers) => {
    const results = new Set();

    const F = (i, accum) => {
        if (sum(accum) === target) {
            results.add(JSON.stringify([...accum]));
            return;
        }

        if (sum(accum) > target) {
            return;
        }

        for (let j = i; j < numbers.length; j++) {
            F(j + 1, [...accum, numbers[j]]);
        }
        return;
    };

    F(0, []);

    const out = [];

    results.forEach((stringArray) => {
        out.push(JSON.parse(stringArray));
    });

    return out;
};

console.log(mk1(5, [1, 1, 2, 2]));
