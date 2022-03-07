const isValid = (string) => {
    if (string.length % 2 !== 0) {
        return false;
    }

    const pairs = [
        { opening: "(", closing: ")" },
        { opening: "[", closing: "]" },
        { opening: "{", closing: "}" },
    ];

    const stack = [];
    for (const char of string) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }

        const topOfStack = stack[stack.length - 1];

        for (const pair of pairs) {
            if (char === pair.closing) {
                if (topOfStack === pair.opening) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return !(stack.length > 0);
};

module.exports = isValid;
