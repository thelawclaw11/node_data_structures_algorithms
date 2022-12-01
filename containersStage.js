const fs = require("fs");

const containers = JSON.parse(fs.readFileSync("./containersStage.json", "utf8"));

const ids = containers.map((container) => container.id);
const uniqIds = new Set(ids);

console.log(uniqIds.size);
console.log(ids.length);
