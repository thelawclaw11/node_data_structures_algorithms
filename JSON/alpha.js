const alpha = (input) => {
    const out = [];
    const stack = [];

    let contentsOfCurrent = "";

    for (const char of input) {
        console.log(stack);
        const topOfStack = stack[stack.length - 1];
        if (char === "[") {
            stack.push(char);
        } else if (char === "]") {
            if (topOfStack === "[") {
                stack.pop();
                out.push(contentsOfCurrent);
                contentsOfCurrent = "";
            }
        } else {
            contentsOfCurrent += char;
        }
    }
    return out;
};

console.log(alpha(`[["Canon", 22],["Ada", 19]]`));
