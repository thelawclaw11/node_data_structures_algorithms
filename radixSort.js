function radixSort(array) {
    const mostDigits = getMostDigits(array);
    for (let i = 0; i < mostDigits; i++) {
        //console.log(array);
        const buckets = Array(10).fill(0);
        for (let j = 0; j < buckets.length; j++) {
            buckets[j] = [];
        }
        for (let j = 0; j < array.length; j++) {
            buckets[getDigit(array[j], i)].push(array[j]);
        }
        array = buckets.flat();
    }
    return array;
}

//const unsortedArray = [40, 7000, 2, 3, 500000, 1, 4, 6, 40];

const unsortedArray = generateUnsortedArray(10000000);
const copy = unsortedArray.slice();

console.time("radix");
radixSort(unsortedArray);
console.timeEnd("radix");

console.time("native");
copy.sort((a, b) => a - b);
console.timeEnd("native");

//const unsortedArray = generateUnsortedArray(10);

//console.log(isSorted(radixSort(unsortedArray)));

function countDigits(number) {
    if (number === 0) return 1;
    const power = Math.log10(Math.abs(number));
    const floored = Math.floor(power);
    return floored + 1;
}

function getMostDigits(array) {
    let maxDigits = 0;
    for (let i = 0; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, countDigits(array[i]));
    }
    return maxDigits;
}

function getDigit(number, place) {
    const divided = Math.abs(number) / Math.pow(10, place);
    const floored = Math.floor(divided);
    return floored % 10;
}
function generateUnsortedArray(n) {
    const out = [];

    for (let i = 0; i <= n; i++) {
        out.push(Math.round(Math.random() * 1000000));
    }
    return out;
}
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}
