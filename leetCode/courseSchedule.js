const { Queue } = require("@datastructures-js/queue");

function canFinish(numCourses, edges) {}

//[target course, dependency]
const alpha = [2, [[1, 0]]];
const beta = [
    8,
    [
        [6, 4],
        [4, 2],
        [7, 2],
        [3, 1],
        [6, 3],
        [4, 1],
        [5, 3],
        [3, 0],
    ],
];
const gamma = [
    2,
    [
        [1, 0],
        [0, 1],
    ],
];

const delta = [
    5,
    [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
    ],
];

console.log(canFinish(...beta));

function mk2(numCourses, edges) {
    let courses = {};

    for (let i = 0; i < numCourses; i++) {
        courses[i] = new Set();
    }

    for (const [a, b] of edges) {
        courses[a].add(b);
    }

    const L = [];
    const queue = new Queue();

    for (let i = 0; i < numCourses; i++) {
        if (courses[i].size === 0) {
            queue.enqueue(i);
            delete courses[i];
        }
    }

    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        L.push(current);

        for (const j in courses) {
            const i = Number(j);
            if (courses[i].has(current)) {
                courses[i].delete(current);
            }
            if (courses[i].size === 0) {
                queue.enqueue(i);
                delete courses[i];
            }
        }
    }

    if (Object.keys(courses).length !== 0) {
        return false;
    }
    return true;
}

function mk1(numCourses, edges) {
    let courses = Array(numCourses)
        .fill()
        .map(() => []);

    for (const [a, b] of edges) {
        courses[a].push(b);
    }

    const L = [];
    const queue = new Queue();

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].length === 0) {
            queue.enqueue(i);
            courses[i] = null;
        }
    }

    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        L.push(current);

        for (let i = 0; i < courses.length; i++) {
            if (courses[i] === null) {
                continue;
            }
            for (let j = 0; j < courses[i].length; j++) {
                if (courses[i][j] === current) {
                    courses[i].splice(j, 1);
                }
            }
            if (courses[i].length === 0) {
                queue.enqueue(i);
                courses[i] = null;
            }
        }
    }

    if (courses.some((x) => x !== null)) {
        return false;
    }
    return true;
}

function mk3(numCourses, edges) {
    const adjacencyList = Array(numCourses)
        .fill()
        .map(() => []);

    for (const [node, dependency] of edges) {
        adjacencyList[dependency].push(node);
    }

    const unvisited = new Set();
    const permanent = new Set();
    const temporary = new Set();

    for (let i = 0; i < numCourses; i++) {
        unvisited.add(i);
    }

    let isCycle = false;

    const sortedInReverse = [];

    while (temporary.size > 0 || unvisited.size > 0) {
        unvisited.forEach((unvisitedNode) => visit(unvisitedNode));
    }

    function visit(node) {
        if (permanent.has(node)) {
            return;
        }
        if (temporary.has(node)) {
            isCycle = true;
            return;
        }

        temporary.add(node);
        unvisited.delete(node);

        for (const neighbor of adjacencyList[node]) {
            visit(neighbor);
        }

        temporary.delete(node);
        permanent.add(node);
        sortedInReverse.push(node);
    }

    sortedInReverse.reverse();
    return isCycle === false;
}
