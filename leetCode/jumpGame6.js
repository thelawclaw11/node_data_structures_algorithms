const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");

function maxResult(nums, k) {
    const n = nums.length;
    const score = Array(n).fill(0);
    score[0] = nums[0];

    const maxQueue = new MaxPriorityQueue({ priority: (el) => el.value });
    maxQueue.enqueue({ value: nums[0], index: 0 });

    for (let i = 1; i < n; i++) {
        while (maxQueue.front().element.index < i - k) {
            maxQueue.dequeue();
        }

        score[i] = nums[i] + score[maxQueue.front().element.index];

        maxQueue.enqueue({ value: score[i], index: i });
    }

    return score[score.length - 1];
}

console.log(maxResult([1, -1, -2, 4, -7, 3], 2));

//console.log(maxResult([1, -1, -2, -3, -4, -5, -6, -7, 8, -4, 9, -3, -2, -1, 10], 4));

// console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2));

// console.log(maxResult([-123]));

// const a = JSON.parse(fs.readFileSync("./testCase1.json", "utf8")).slice(0, 3000);
//
// console.log(a);
// const k = 16309;
//
// console.log(maxResult(a, 300)); //728917

// console.log(mk1([0, -1, -2, -3, -4, -5, -6, -7, 0], 4));
