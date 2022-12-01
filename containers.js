const fs = require("fs");

const containers = JSON.parse(fs.readFileSync("./containers.json", "utf8"));

const ids = containers.map((container) => container.id);

const table = {};

for (const id of ids) {
    if (id in table) {
        table[id] += 1;
    } else {
        table[id] = 1;
    }
}

console.log(table);
console.log(Object.entries(table).length);

// const uniqIds = new Set(ids);
//
// console.log(uniqIds.size);
// console.log(ids.length);
