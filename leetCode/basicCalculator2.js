const isDigit = (c) => /\d/.test(c);

const normalizeInput = (input) => {
    const array = [];

    let number = null;
    for (const char of input) {
        if (isDigit(char)) {
            if (number === null) {
                number = parseInt(char);
            } else {
                number = number * 10 + parseInt(char);
            }
        }
        if (char === " ") {
            if (number !== null) {
                array.push(number);
            }
            number = null;
        }

        if (char === "*" || char === "/" || char === "+" || char === "-") {
            if (number !== null) {
                array.push(number);
            }
            number = null;
            array.push(char);
        }
    }
    if (number !== null) {
        array.push(number);
    }
    return array;
};

const calculate = (input) => {
    const array = normalizeInput(input);
    array.push("END");

    const priority = {
        "*": 4,
        "/": 4,
        "+": 2,
        "-": 2,
        END: 0,
    };

    let result = null;
    let staging = null;
    let operation = null;

    let lastResult = null;
    let lastOperation = null;

    const evaluate = (left, right, operation) => {
        if (operation === "*") {
            return left * right;
        } else if (operation === "/") {
            return Math.floor(left / right);
        } else if (operation === "+") {
            return left + right;
        } else if (operation === "-") {
            return left - right;
        }
    };

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (typeof current === "number") {
            if (result === null) {
                result = current;
            } else {
                staging = current;
            }
        } else {
            //current is operation
            if (operation === null) {
                operation = current;
            }
            if (result !== null && staging !== null && operation !== null) {
                if (priority[current] <= priority[operation]) {
                    result = evaluate(result, staging, operation);

                    if (priority[lastOperation] >= priority[current]) {
                        result = evaluate(lastResult, result, lastOperation);
                        lastResult = null;
                        lastOperation = null;
                    }

                    staging = null;
                    operation = current;
                } else {
                    lastResult = result;
                    lastOperation = operation;
                    result = staging;
                    staging = null;
                    operation = current;
                }
            }
        }
    }

    return result;
};

module.exports = calculate;
