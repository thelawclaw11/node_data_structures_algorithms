function trap(numbers) {
    const stack = [];
    stack.peek = function () {
        return this[this.length - 1];
    };

    stack.isEmpty = function () {
        return this.length === 0;
    };

    let total = 0;

    for (let right = 0; right < numbers.length; right++) {
        const current = numbers[right];

        while (!stack.isEmpty() && current >= stack.peek()[0]) {
            const [poppedElevation] = stack.pop();
            console.log(poppedElevation, !stack.isEmpty(), stack.peek());

            if (!stack.isEmpty()) {
                const [leftElevation, left] = stack.peek();
                const horizontalDifference = right - left - 1;
                const lowPoint = Math.min(leftElevation, current);
                const verticalDifference = lowPoint - poppedElevation;

                total += verticalDifference * horizontalDifference;
            }
        }
        stack.push([current, right]);
    }
    return total;
}

function dynamicProgramming(numbers) {
    const length = numbers.length;

    if (length === 0) {
        return 0;
    }

    let total = 0;

    const leftMax = Array(length);
    const rightMax = Array(length);

    leftMax[0] = numbers[0];

    for (let i = 1; i < length; i++) {
        leftMax[i] = Math.max(numbers[i], leftMax[i - 1]);
    }

    rightMax[length - 1] = numbers[length - 1];

    for (let i = length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(numbers[i], rightMax[i + 1]);
    }

    for (let i = 1; i < length - 1; i++) {
        total += Math.min(leftMax[i], rightMax[i]) - numbers[i];
    }

    return total;
}

function pointers(numbers) {
    let total = 0;

    let L = 0;
    let R = numbers.length - 1;

    let maxL = numbers[L];
    let maxR = numbers[R];

    while (L < R) {
        maxL = Math.max(maxL, numbers[L]);
        maxR = Math.max(maxR, numbers[R]);

        const low = Math.min(maxL, maxR);

        const differenceL = Math.max(low - numbers[L], 0);
        const differenceR = Math.max(low - numbers[R], 0);

        total += differenceR;
        total += differenceL;

        if (numbers[R] < numbers[L]) {
            R--;
        } else {
            L++;
        }
    }
    return total;
}

function mk1(numbers) {
    let total = 0;

    let localMax = 0;

    let table = new Map();

    const max = Math.max(...numbers);

    for (let i = 0; i <= max; i++) {
        table.set(i, 0);
    }

    for (const current of numbers) {
        for (let i = 0; i < current; i++) {
            total += table.get(i);
            table.set(i, 0);
        }

        localMax = Math.max(current, localMax);
        for (let j = current; j < localMax; j++) {
            table.set(j, table.get(j) + 1);
        }

        //console.log(table);
    }

    //console.log(table);

    return total;
}

module.exports = { trap, mk1 };

function makeGraph(numbers) {
    let a = "";

    const max = Math.max(...numbers);

    for (let i = max; i > 0; i--) {
        let s = "";
        for (const num of numbers) {
            if (num >= i) {
                s += "X";
            } else {
                s += " ";
            }
        }
        a += "\n" + s;
    }

    return a;
}
