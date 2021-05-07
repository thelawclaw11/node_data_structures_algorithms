function leastInterval(tasks, n) {
    return mk2(tasks, n);
}

//mk1--brute force checking all permutations
//mk2--backtracking dfs

function mk3(tasks, n) {
    return mk2(tasks, n);
}

function mk2(tasks, n) {
    if (n === 0) {
        return calculateExecutionCost(tasks, n);
    }

    const count = {};

    for (const task of tasks) {
        if (task in count) {
            count[task]++;
        } else {
            count[task] = 1;
        }
    }

    const entries = Object.entries(count);

    function sortEntries() {
        entries.sort((a, b) => b[1] - a[1]);
    }
    sortEntries();

    const bestPermutation = [];
    bestPermutation.push();

    const mostRecent = {};

    while (bestPermutation.length < tasks.length) {
        let bestEntry = [];
        let bestTaskCost = Infinity;

        for (const entry of entries) {
            if (entry[1] === 0) {
                continue;
            }

            let costToAdd = 1;
            if (entry[0] in mostRecent) {
                const additionalCost = Math.max(0, n + 1 - (bestPermutation.length - mostRecent[entry[0]]));
                costToAdd += additionalCost;
            }

            if (costToAdd < bestTaskCost) {
                bestTaskCost = costToAdd;
                bestEntry = entry;
            }
        }

        bestPermutation.push(bestEntry[0]);
        mostRecent[bestEntry[0]] = bestPermutation.length - 1;
        bestEntry[1]--;
        sortEntries();
    }

    //console.log(bestPermutation);

    return calculateExecutionCost(bestPermutation, n);
}

function mk1(tasks, n) {
    const permutations = createPermutations(tasks);

    let minCost = Infinity;
    let bestPermutation = [];

    for (const permutation of permutations) {
        const cost = calculateExecutionCost(permutation, n);

        if (cost < minCost) {
            minCost = cost;
            bestPermutation = permutation;
        }
    }

    console.log(bestPermutation);
    return minCost;
}

function createPermutations(tasks) {
    const permutations = [];

    let accum = [];
    const counter = {};

    for (const task of tasks) {
        if (task in counter) {
            counter[task]++;
        } else {
            counter[task] = 1;
        }
    }

    function traverse() {
        if (accum.length === tasks.length) {
            permutations.push([...accum]);
        }

        for (const task in counter) {
            if (counter[task] > 0) {
                accum.push(task);
                counter[task]--;
                traverse();
                accum.pop();
                counter[task]++;
            }
        }
    }

    traverse();

    return permutations;
}

function createExecutionOrder(tasks, n) {
    const executionOrder = [];

    for (const task of tasks) {
        const previousExecutionIndex = executionOrder.length - 1;

        for (let i = previousExecutionIndex; previousExecutionIndex - i < n && i >= 0; i--) {
            if (task === executionOrder[i]) {
                const numIdleCyclesToAdd = n - (previousExecutionIndex - i);
                let numAdded = 0;
                while (numAdded < numIdleCyclesToAdd) {
                    executionOrder.push(null);
                    numAdded++;
                }
            }
        }
        executionOrder.push(task);
    }

    return executionOrder;
}
function calculateExecutionCost(tasks, n) {
    return createExecutionOrder(tasks, n).length;
}

module.exports = { mk1, calculateExecutionCost, createExecutionOrder, createPermutations, leastInterval };
