import { Parser } from "json2csv";
import fs from "fs";

const data = [
    { name: "Canon", age: 23 },
    { name: "Sam", age: 32 },
];
const columns = ["name", "age"];

const opts = { fields: columns };

const parser = new Parser(opts);
const csv = parser.parse(data);

console.log(csv);

fs.writeFileSync("test_csv.csv", csv);
