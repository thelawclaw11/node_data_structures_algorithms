const minRemoveToMakeValid = (string) => {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const top = stack[stack.length - 1];

        if (char === ")") {
            if (top && top.char === "(") {
                stack.pop();
            } else {
                stack.push({ char, index: i });
            }
        }

        if (char === "(") {
            stack.push({ char, index: i });
        }
    }

    const array = string.split("");

    for (const element of stack) {
        array[element.index] = null;
    }

    return array.filter((item) => item !== null).join("");
};

//console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
