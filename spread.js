// function Range(start, end) {
//     this.start = start;
//     this.end = end;
//
//     this[Symbol.iterator] = function () {
//         const range = this;
//         let i = range.start;
//         return {
//             next: () => {
//                 const temp_i = i;
//                 i += 1;
//                 return {
//                     done: temp_i >= range.end,
//                     value: temp_i,
//                 };
//             },
//         };
//     };
//
//     return this;
// }

function range(start, end, step = 1) {
    const value = {};
    value.start = start;
    value.end = end;
    value.step = step;

    value[Symbol.iterator] = () => {
        let i = value.start;
        return {
            next: () => {
                const tempI = i;
                i += step;
                return {
                    done: tempI >= value.end,
                    value: tempI,
                };
            },
        };
    };
    return value;
}

// const spread = (arr, iter) => {
//     for (const val of iter) {
//         arr.push(val);
//     }
//
//     return arr;
// };

function* range(start, end, step) {
    let i = start;

    while (i < end) {
        yield i;
        i += step;
    }
}

console.log([...range(10, 1000, 420)]);

// for (const n of range(10, 50, 3)) {
//     console.log(n);
// }

// console.log([...range(1, 10)]);

// for (const n of range(0, 50, 2)) {
//     console.log(n);
// }
//
// const nums = [...range(1, 10), ...range(100, 110)];
//
// console.log(nums);
