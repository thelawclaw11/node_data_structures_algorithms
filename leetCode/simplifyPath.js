const simplifyPath = (path) => {
    const stack = [];
    let cur = "";

    for (const char of path.concat("/")) {
        if (char === "/") {
            if (cur === "..") {
                if (stack.length > 0) {
                    stack.pop();
                } else if (cur !== "" && cur !== ".") {
                    stack.push(cur);
                }
                cur = "";
            }
        } else {
            cur += char;
        }
    }

    return "/" + stack.join("/");
};

console.log(simplifyPath("/../abc//./def/"));

module.exports = simplifyPath;
