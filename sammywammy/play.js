import _ from "lodash";
import { meanBy } from "ramda";
console.log(_.meanBy([]));
console.log(meanBy([]));

// import { parseISO } from "date-fns";
//
// const s = "2022-07-29T00:00:40.000Z";
//
// const a = parseISO(s);
//
// console.log(a);
// console.log(a.getHours());
// console.log(a.getUTCDate());
//
// const formatDate = (date) => {};
//
// const formatDate = (date: Date) =>
//     `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
// const date = new Date(containerScannedDate);
// console.log("date", date);
// values[6] = formatDate(date);
// console.log("formatDate(date) pre mutate", formatDate(date));
// date.setUTCDate(date.getUTCDate() + 1);
// values[7] = formatDate(date);
