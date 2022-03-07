const removeDuplicates = (string) => {
    const stack = [];
    const peek = () => stack[stack.length - 1];

    for (const char of string) {
        if (char === peek()) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    let result = "";

    for (const char of stack) {
        result += char;
    }
    return result;
};

console.log(removeDuplicates("abbaca"));

const mk1 = (string) => {
    let inputString = string;
    let nextString = "";

    let duplicatesFound = true;

    while (duplicatesFound === true) {
        duplicatesFound = false;
        for (let j = 0; j < inputString.length; j++) {
            if (inputString[j] === inputString[j + 1]) {
                duplicatesFound = true;
                j++;
            } else {
                nextString += inputString[j];
            }
        }
        if (duplicatesFound) {
            inputString = nextString;
            nextString = "";
        }
    }

    return nextString;
};
