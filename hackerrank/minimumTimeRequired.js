const fs = require("fs");

function minTime(machines, goal) {
    function search(lo, hi) {
        //console.log(lo, hi);
        const mid = Math.floor((hi + lo) / 2);
        //console.log("mid", mid);

        const totalProduced = getTotalProduced(mid, machines);
        //console.log("total produced: ", totalProduced);

        if (goal === totalProduced) {
            for (let i = mid; i >= 0; i--) {
                const previousTotalProduces = getTotalProduced(i - 1, machines);
                if (totalProduced > previousTotalProduces) {
                    return i;
                }
            }
        }
        const nextTotalProduced = getTotalProduced(mid + 1, machines);

        if (goal > totalProduced && goal < nextTotalProduced) {
            return mid + 1;
        }

        if (goal < totalProduced) {
            return search(lo, mid - 1);
        }
        if (goal > totalProduced) {
            return search(mid + 1, hi);
        }
    }
    return search(1, Math.pow(10, 14));
}

function getTotalProduced(days, machines) {
    let sum = 0;
    for (let i = 0; i < machines.length; i++) {
        sum += Math.floor(days / machines[i]);
    }
    return sum;
}

//console.log(Math.floor(2 / 2));

//console.log(minTime([2, 3], 5));

//console.log(getTotalProduced(20, [4, 5, 6]));

console.log(minTime([4, 5, 6], 12));

// const testCase1 = fs.readFileSync("./testCase1.txt", "utf8").split(" ").map(Number);
//
// console.log(minTime(testCase1, 844676607));
