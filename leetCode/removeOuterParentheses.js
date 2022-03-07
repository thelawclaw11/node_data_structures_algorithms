const removeOuterParentheses = (inputString) => {
    let result = "";
    let innerContents = "";
    const stack = [];

    for (const char of inputString) {
        if (stack.length === 1 && char === ")") {
            stack.pop();
            result += innerContents;
            innerContents = "";
        }

        if (stack.length > 0) {
            innerContents += char;
        }

        if (char === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        }

        if (char === "(") {
            stack.push(char);
        }
    }
    return result;
};

module.exports = removeOuterParentheses;
