function mergeSort(array) {
    function split(arr) {
        const low = 0;
        const high = arr.length;
        const mid = Math.floor(high / 2);
        return [arr.slice(low, mid), arr.slice(mid, high)];
    }

    function merge(left, right) {
        const out = [];
        let l = 0;
        let r = 0;

        while (l < left.length || r < right.length) {
            if ((left[l] < right[r] && l < left.length) || r >= right.length) {
                out.push(left[l]);
                l++;
            } else {
                out.push(right[r]);
                r++;
            }
        }
        return out;
    }

    function F(arr) {
        if (arr.length < 2) {
            return arr;
        }

        const [left, right] = split(arr);
        return merge(F(left), F(right));
    }

    return F(array);
}

function quickSort(array) {}

function selectionSort(array) {
    const out = Array(array.length);

    for (let i = 0; i < array.length; i++) {
        let min = Infinity;
        let minIndex = null;
        for (let j = 0; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }

        array[minIndex] = Infinity;
        out[i] = min;
    }
    return out;
}

function jsSort(array) {
    array.sort((a, b) => a - b);
    return array;
}

module.exports = { mergeSort, quickSort, selectionSort, jsSort };
