const sortedSquares = (nums) => {
    const squares = nums.map((num) => num * num);
    return squares.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
