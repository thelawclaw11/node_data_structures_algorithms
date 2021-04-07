function checkPowersOfThree(target) {
    while (target > 0) {
        let d = target % 3;
        if (d === 2) {
            return false;
        }
        target = (target / 3) >> 0;
    }
    return true;
}

console.log(checkPowersOfThree(5));
console.log(checkPowersOfThree(12));
//console.log(checkPowersOfThree(27));
// console.log(checkPowersOfThree(21));
//console.log(checkPowersOfThree(9999998));
