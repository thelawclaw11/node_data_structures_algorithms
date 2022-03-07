const serialize = () => {};

const isStringLiteral = (inputString) =>
    inputString[0] === '"' && inputString[inputString.length - 1] === '"';

const isNumber = (inputString) => !isNaN(Number(inputString));

const isArray = (inputString) =>
    inputString[0] === "[" && inputString[inputString.length - 1] === "]";

const isObject = (inputString) =>
    inputString[0] === "{" && inputString[inputString.length - 1] === "}";

const parse = (rawInputString) => {
    const inputString = rawInputString.trim();

    if (isStringLiteral(inputString)) {
        const chars = inputString.slice(1).slice(0, -1);

        for (let i = 0; i < chars.length; i++) {}

        return chars.replace("\\n", "\n").replace("\\r", "\r");
    }

    if (isNumber(inputString)) {
        return Number(inputString);
    }

    if (inputString === "true") {
        return true;
    }

    if (inputString === "false") {
        return false;
    }

    if (inputString === "null") {
        return null;
    }

    if (isArray(inputString)) {
        const array = [];

        const stack = [];

        const stuffBetweenOuterBrackets = inputString.slice(1, -1);

        let leftPointer = 0;

        for (let i = 0; i < stuffBetweenOuterBrackets.length; i++) {
            const current = stuffBetweenOuterBrackets[i];

            if (current === "[") {
                stack.push(current);
            } else if (current === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            }

            if (current === "{") {
                stack.push(current);
            } else if (current === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            }

            if (current === `"`) {
                if (stack[stack.length - 1] === `"`) {
                    stack.pop();
                } else {
                    stack.push(current);
                }
            }

            if (stack.length === 0) {
                if (current === ",") {
                    array.push(
                        parse(stuffBetweenOuterBrackets.slice(leftPointer, i))
                    );
                    leftPointer = i + 1;
                } else if (i === stuffBetweenOuterBrackets.length - 1) {
                    array.push(
                        parse(
                            stuffBetweenOuterBrackets.slice(leftPointer, i + 1)
                        )
                    );
                    leftPointer = i + 1;
                }
            }
        }
        return array;
    }

    if (isObject(inputString)) {
        const object = {};

        const stuffBetweenOuterBrackets = inputString.slice(1, -1);

        let rawKey = "";

        let contentSectionStart = null;

        let inKeySection = true;

        const stack = [];

        for (let i = 0; i < stuffBetweenOuterBrackets.length; i++) {
            const current = stuffBetweenOuterBrackets[i];
            if (inKeySection) {
                if (current === ":") {
                    inKeySection = false;
                    contentSectionStart = i + 1;
                } else {
                    rawKey = (rawKey + current).trim();
                }
            } else {
                if (current === "[") {
                    stack.push(current);
                } else if (current === "]" && stack[stack.length - 1] === "[") {
                    stack.pop();
                }

                if (current === "{") {
                    stack.push(current);
                } else if (current === "}" && stack[stack.length - 1] === "{") {
                    stack.pop();
                }

                if (current === `"`) {
                    if (stack[stack.length - 1] === `"`) {
                        stack.pop();
                    } else {
                        stack.push(current);
                    }
                }

                if (stack.length === 0) {
                    const normalizedKey = rawKey.slice(1, -1);
                    if (current === ",") {
                        object[normalizedKey] = parse(
                            stuffBetweenOuterBrackets.slice(
                                contentSectionStart,
                                i
                            )
                        );
                        inKeySection = true;
                        rawKey = "";
                        contentSectionStart = null;
                    } else if (i === stuffBetweenOuterBrackets.length - 1) {
                        object[normalizedKey] = parse(
                            stuffBetweenOuterBrackets.slice(
                                contentSectionStart,
                                i + 1
                            )
                        );
                        inKeySection = true;
                        rawKey = "";
                        contentSectionStart = null;
                    }
                }
            }
        }
        return object;
    }
};

const json = { serialize, parse };

// console.log(json.parse(`{"message": "Hello, World!" }`));

module.exports = json;
