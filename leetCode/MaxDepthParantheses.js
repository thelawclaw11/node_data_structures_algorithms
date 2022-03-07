const maxDepth = (s) => {
    let maxDepth = 0;
    const stack = [];

    for (const char of s) {
        if (char === "(") {
            stack.push(char);
        }
        if (char === ")" && stack[stack.length - 1]) {
            stack.pop();
        }
        maxDepth = Math.max(maxDepth, stack.length);
    }

    return maxDepth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
