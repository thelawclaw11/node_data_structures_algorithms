const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

function combinationSum(numbers, target) {
    const cols = target + 1;
    const rows = numbers.length;
    const dp = Array(rows)
        .fill()
        .map(() =>
            Array(cols)
                .fill()
                .map(() => [])
        );

    for (let i = 0; i < dp.length; i++) {
        dp[i][0].push([]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (i - 1 >= 0) {
                dp[i][j].push(...dp[i - 1][j]);
            }
            if (j - numbers[i] >= 0) {
                dp[i][j].push(...dp[i][j - numbers[i]].map((x) => [...x, numbers[i]]));
            }
        }
    }
    return dp[rows - 1][cols - 1];
}

//console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([1, 2, 5], 5));

/*function combinationSum(numbers, target) {
    numbers.sort((a, b) => b - a);

    const memo = {};

    function inner(target, index) {
        if (target in memo) {
            if (index in memo[target]) {
                return memo[target][index];
            }
        }

        if (target === 0) return [[]];

        const combinations = [];

        for (let i = index; i < numbers.length; i++) {
            const num = numbers[i];
            if (target - num >= 0) {
                const remainderResult = inner(target - num, i);
                //console.log(remainderResult);
                const combinationWithCurrent = remainderResult.map((x) => x.concat(num));
                //console.log(combinationWithCurrent);
                combinations.push(...combinationWithCurrent);
            }
        }

        memo[target] = {};
        memo[target][index] = combinations;
        return combinations;
    }

    const result = inner(target, 0);
    //prettyPrint(memo);
    return result;
}*/

/*function combinationSum(numbers, target) {
    const combos = [];
    inner(target, [], 0);
    return combos;

    function inner(target, currentCombo, index) {
        if (target === 0) combos.push([...currentCombo]);

        for (let i = index; i < numbers.length; i++) {
            if (numbers[i] <= target) {
                currentCombo.push(numbers[i]);

                inner(target - numbers[i], currentCombo, i);
                currentCombo.pop();
            }
        }
    }
}*/

/*function combinationSum(candidates, target){
    const combos = [];
    combinationSum

    function helper(){

    }

}*/

//console.log(combinationSum([], 1));

//console.log(combinationSum([2, 3, 6, 7], 8));
