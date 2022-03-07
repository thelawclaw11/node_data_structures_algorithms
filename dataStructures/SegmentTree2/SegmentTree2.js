const buildPST = (array) => {
    const table = {};

    const F = (start, end) => {
        const key = `${start},${end}`;
        if (key in table) {
            return table[key];
        }

        if (start === end) {
            return -Infinity;
        }

        if (end - start === 1) {
            table[key] = array[start];
            return array[start];
        }
        const mid = Math.floor((start + end) / 2);

        const result = Math.max(F(start, mid), F(mid, end));

        table[key] = result;

        return result;
    };

    F(0, array.length);

    const getRangeFromKey = (key) => {
        const [start, end] = key.split(",").map(Number);
        return { start, end };
    };

    const PST = [{ start: 0, end: array.length, data: table[`${0},${array.length}`] }];

    console.log(table);
};

console.log(buildPST([3, 2, 1, 6, 0, 5]));
