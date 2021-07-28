function numKLenSubstrNoRepeats(string, k) {
    let total = 0;

    let chars = new Set();

    let i = 0;
    while (i + k <= string.length) {
        if (chars.size < k) {
            let j = i;
            while (chars.size < k && j < string.length) {
                if (chars.has(string[j])) {
                    i++;
                    chars = new Set();
                    break;
                } else {
                    chars.add(string[j]);
                }
                j++;
            }
        } else if (chars.size === k) {
            total++;

            const r = i + k;

            const prevChar = string[i];
            const nextChar = string[r];

            chars.delete(prevChar);

            if (chars.has(nextChar)) {
                chars = new Set();
            } else {
                chars.add(nextChar);
            }
            i++;
        }
    }

    return total;
}

//console.log(numKLenSubstrNoRepeats("hhavefunonleetcode", 5));
const input = "fdjgajdijjafdjeajdfjeahdcchfjcbabjfcedggfbafdcfcihhddbbeidicjbfbbgdgehcedcaaaicdifhjddgjai";

console.log(numKLenSubstrNoRepeats(input, 5));
console.log(mk1(input, 5));

function mk1(string, k) {
    let total = 0;

    for (let i = 0; i < string.length; i++) {
        const chars = new Set();
        for (let j = i; j < i + k && j < string.length; j++) {
            chars.add(string[j]);
        }
        if (chars.size === k) {
            total++;
        }
    }

    return total;
}
