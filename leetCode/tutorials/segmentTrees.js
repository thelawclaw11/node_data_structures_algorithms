// function merge(left, right){
//     return
// }

function buildSegmentTree(array, merge, defaultValue = 0) {
    const arraySize = array.length;
    const treeSize = Math.pow(2, Math.ceil(Math.log2(arraySize)) + 1) - 1;
    const tree = Array(treeSize).fill(defaultValue);

    const helper = (lo, hi, treeIndex) => {
        if (lo === hi) {
            tree[treeIndex] = array[lo];
            return array[lo];
        }

        const mid = Math.floor((lo + hi) / 2);

        const leftChildIndex = 2 * (treeIndex + 1) - 1;
        const rightChildIndex = leftChildIndex + 1;

        const leftChild = helper(lo, mid, leftChildIndex);
        const rightChild = helper(mid + 1, hi, rightChildIndex);

        const merged = merge(leftChild, rightChild);

        tree[treeIndex] = merged;

        return merged;
    };

    helper(0, arraySize - 1, 0);

    return tree;
}

function rangeQuery(tree, merge, defaultValue, start, end, n) {
    function helper(
        currentIndex,
        startResponsible,
        endResponsible,
        startQueryRange,
        endQueryRange
    ) {
        if (startResponsible > endQueryRange || endResponsible < startQueryRange) {
            return defaultValue;
        }

        if (startQueryRange <= startResponsible && endQueryRange >= endResponsible) {
            return tree[currentIndex];
        }

        const mid = Math.floor((startResponsible + endResponsible) / 2);

        if (startQueryRange > mid) {
            return helper(
                2 * currentIndex + 2,
                mid + 1,
                endResponsible,
                startQueryRange,
                endQueryRange
            );
        }

        if (endQueryRange <= mid) {
            return helper(
                2 * currentIndex + 1,
                startResponsible,
                mid,
                startQueryRange,
                endQueryRange
            );
        }

        const leftQuery = helper(2 * currentIndex + 1, startResponsible, mid, startQueryRange, mid);
        const rightQuery = helper(
            2 * currentIndex + 2,
            mid + 1,
            endResponsible,
            mid + 1,
            endQueryRange
        );
        return merge(leftQuery, rightQuery);
    }

    return helper(0, 0, n - 1, start, end);
}

module.exports = { buildSegmentTree, rangeQuery };
