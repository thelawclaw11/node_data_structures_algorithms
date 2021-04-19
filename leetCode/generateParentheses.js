function generateParentheses(n) {
    const solutions = [];

    const accum = ["("];

    function backtrack(leftCount, rightCount) {
        if (leftCount === n && leftCount === rightCount) {
            solutions.push([...accum].join(""));
            return;
        }

        if (leftCount > n) {
            return;
        }

        if (rightCount > leftCount) {
            return;
        }
        accum.push("(");
        backtrack(leftCount + 1, rightCount);
        accum.pop();

        accum.push(")");
        backtrack(leftCount, rightCount + 1);
        accum.pop();
    }

    backtrack(1, 0);
    return solutions;
}

console.log(generateParentheses(3));
