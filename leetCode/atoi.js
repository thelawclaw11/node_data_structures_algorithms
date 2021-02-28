const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);

function myAtoi(str) {
    let i = 0;
    let sign = 1;
    let result = 0;

    if (str.length === 0) {
        return 0;
    }

    while (i < str.length && str[i] === " ") {
        i++;
    }

    if (i < str.length && (str[i] === "+" || str[i] === "-")) {
        sign = str[i++] === "-" ? -1 : 1;
    }

    while (i < str.length && str[i] >= "0" && str[i] <= "9") {
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && str[i] - "0" > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result * 10 + (str[i++] - "0");
    }
    return result * sign;
}

console.log(myAtoi("   +0 123"));

// function myAtoi(s) {
//     const array = [];
//
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== " ") {
//             array.push(s[i]);
//         } else if (array.length >= 1 && s[i] === " ") {
//             break;
//         }
//     }
//
//     let isPositive = true;
//
//     if (array[0] === "-") {
//         isPositive = false;
//         array.shift();
//     } else if (array[0] === "+") {
//         array.shift();
//     }
//
//     const digitArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= "0" && array[i] <= "9") {
//             digitArray.push(array[i]);
//         } else {
//             break;
//         }
//     }
//
//     let number = 0;
//
//     for (let i = 0; i < digitArray.length; i++) {
//         number += digitArray[i] * Math.pow(10, digitArray.length - i - 1);
//     }
//
//     if (isPositive === false) {
//         number = -number;
//     }
//
//     if (number < MIN) {
//         return MIN;
//     }
//     if (number > MAX) {
//         return MAX;
//     }
//
//     return number;
// }
