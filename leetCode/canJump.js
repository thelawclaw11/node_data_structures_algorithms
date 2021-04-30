// const Index = {
//     GOOD: "GOOD",
//     BAD: "BAD",
//     UNKNOWN: "UNKNOWN",
// };
//
// function canJump(numbers) {
//     const memo = Array(numbers.length).fill(0);
//
//     for (let i = 0; i < memo.length; i++) {
//         memo[i] = Index.UNKNOWN;
//     }
//
//     memo[memo.length - 1] = Index.GOOD;
//
//     for (let i = numbers.length - 2; i >= 0; i--) {
//         const furthestJump = Math.min(i + numbers[i], numbers.length - 1);
//         for (let j = i + 1; j <= furthestJump; j++) {
//             if (memo[j] === Index.GOOD) {
//                 memo[i] = Index.GOOD;
//                 break;
//             }
//         }
//     }
//
//     return memo[0] == Index.GOOD;
// }

function canJump(numbers) {
    let lastPos = numbers.length - 1;
    for (let i = lastPos - 1; i >= 0; i--) {
        const minRequiredJump = lastPos - i;
        if (numbers[i] >= minRequiredJump) {
            lastPos = i;
        }
    }

    return lastPos === 0;
}

console.time();
console.log(canJump([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 4]));
console.timeEnd();
console.log(canJump([2, 3, 1, 1, 4]));

// function canJump(numbers) {
//     let i = numbers.length - 1;
//
//     while (i >= 0) {
//         // console.log(i);
//         if (i === 0) {
//             return true;
//         }
//
//         let canMove = false;
//
//         for (let j = i - 1; j >= 0; j--) {
//             //console.log(j);
//             const minRequiredJump = i - j;
//
//             if (numbers[j] >= minRequiredJump) {
//                 i = j;
//                 canMove = true;
//                 break;
//             }
//         }
//
//         if (!canMove) {
//             break;
//         }
//     }
//
//     return false;
// }

// function canJump(numbers) {
//     const lastIndex = numbers.length - 1;
//     const memo = {};
//     let counter = 0;
//
//     function traverse(index) {
//         if (index in memo) {
//             return memo[index];
//         }
//         counter++;
//         if (index === lastIndex) {
//             return true;
//         }
//
//         if (numbers[index] === 0) {
//             return false;
//         }
//
//         const maxJumpDistance = numbers[index];
//
//         for (let i = maxJumpDistance; i > 0; i--) {
//             const result = traverse(index + i);
//             if (result === true) {
//                 memo[index] = true;
//                 return true;
//             }
//         }
//
//         memo[index] = false;
//         return false;
//     }
//
//     const result = traverse(0);
//     return result;
// }
