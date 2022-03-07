const isDigit = (c) => /\d/.test(c);
const calculate = (string) => {
    const stack = [];
    let operand = 0;
    let sum = 0;
    let sign = 1;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (isDigit(char)) {
            let num = 0;
            while (isDigit(string[i])) {
                num = num * 10 + parseInt(string[i]);
                i++;
            }
            sum += num * sign;
            i--;
        } else if (char === "+") {
            sign = 1;
        } else if (char === "-") {
            sign = -1;
        } else if (char === "(") {
            stack.push(sum);
            stack.push(sign);
            sign = 1;
            sum = 0;
        } else if (char === ")") {
            sum = stack.pop() * sum;
            sum += stack.pop();
        }
    }

    return sum + sign * operand;
};
module.exports = calculate;

//
// const normalizeInput = (input) => {
//     const array = [];
//
//     let currentDigits = "";
//
//     for (const char of input) {
//         if (isDigits(char)) {
//             currentDigits += char;
//         } else {
//             if (currentDigits.length > 0) {
//                 array.push(Number(currentDigits));
//                 currentDigits = "";
//             }
//             if (char !== " ") {
//                 array.push(char);
//             }
//         }
//     }
//
//     if (currentDigits.length > 0) {
//         array.push(Number(currentDigits));
//     }
//     return array;
// };
//
// const getSumOfFlatArray = (flatArray) => {
//     let sum = 0;
//
//     let isPositive = true;
//
//     for (const element of flatArray) {
//         if (typeof element === "number") {
//             if (isPositive) {
//                 sum += element;
//             } else {
//                 sum -= element;
//                 isPositive = true;
//             }
//         } else if (element === "-") {
//             isPositive = !isPositive;
//         } else if (element === "+") {
//             isPositive = true;
//         }
//     }
//
//     return sum;
// };
//
// const calculate = (input) => {
//     const array = normalizeInput(input);
//
//     const F = (arr) => {
//         const flatArray = [];
//
//         let i = 0;
//
//         while (i < arr.length) {
//             if (arr[i] !== "(") {
//                 flatArray.push(arr[i]);
//                 i++;
//             }
//
//             if (arr[i] === "(") {
//                 const stack = [];
//                 let j = i + 1;
//                 stack.push("(");
//
//                 while (stack.length > 0) {
//                     if (arr[j] === "(") {
//                         stack.push(arr[j]);
//                     } else if (
//                         arr[j] === ")" &&
//                         stack[stack.length - 1] === "("
//                     ) {
//                         stack.pop();
//                     }
//                     j++;
//                 }
//
//                 flatArray.push(F(arr.slice(i + 1, j - 1)));
//                 i = j;
//             }
//         }
//
//         return getSumOfFlatArray(flatArray);
//     };
//
//     return F(array);
// };
