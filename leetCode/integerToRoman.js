const numerals = ["M", "D", "C", "L", "X", "V", "I"];

function intToRoman(num) {
    const result = [];

    let diff = num;

    while (diff > 0) {
        if (diff >= 1000) {
            result.push("M");
            diff -= 1000;
        } else if (diff >= 900) {
            result.push("CM");
            diff -= 900;
        } else if (diff >= 500) {
            result.push("D");
            diff -= 500;
        } else if (diff >= 400) {
            result.push("CD");
            diff -= 400;
        } else if (diff >= 100) {
            result.push("C");
            diff -= 100;
        } else if (diff >= 90) {
            result.push("XC");
            diff -= 90;
        } else if (diff >= 50) {
            result.push("L");
            diff -= 50;
        } else if (diff >= 40) {
            result.push("XL");
            diff -= 40;
        } else if (diff >= 10) {
            result.push("X");
            diff -= 10;
        } else if (diff >= 9) {
            result.push("IX");
            diff -= 9;
        } else if (diff >= 5) {
            result.push("V");
            diff -= 5;
        } else if (diff >= 4) {
            result.push("IV");
            diff -= 4;
        } else {
            result.push("I");
            diff--;
        }
    }
    return result.join("");
}

console.log(intToRoman(1994));

//console.log(intToRoman(9));
