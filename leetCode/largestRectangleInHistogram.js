const largestRectangleArea = (heights) => {
    let maxArea = 0;
    const stack = []; // (index, height)

    for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        let start = i;
        while (stack.length > 0 && h < stack[stack.length - 1].height) {
            const top = stack.pop();
            const area = (i - top.index) * top.height;
            maxArea = Math.max(maxArea, area);
            start = top.index;
        }
        stack.push({ index: start, height: h });
    }

    const length = heights.length;

    while (stack.length > 0) {
        const top = stack.pop();
        const area = (length - top.index) * top.height;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

//14
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3, 2, 4, 3]));
//10
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

// function mk1(heights) {
//     let max = 0;
//     for (let i = 0; i < heights.length; i++) {
//         let min = Infinity;
//         let area = 0;
//         for (let j = i; j < heights.length; j++) {
//             min = Math.min(min, heights[j]);
//             area = Math.max(area, (j + 1 - i) * min);
//         }
//
//         max = Math.max(max, area);
//     }
//     return max;
// }
