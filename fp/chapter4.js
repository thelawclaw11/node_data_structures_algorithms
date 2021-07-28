const { curry } = require("../fp/utils");
const { curry } = require("@mostly-adequate/support");

const add = curry((a, b, c) => a + b + c);
const increment = add(1);
const addTen = add(10);

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

const hasLetterR = match(/r/g);

const removeStringsWithoutRs = filter(hasLetterR);

const noVowels = replace(/[aeiou]/gi);
const censored = noVowels("*");

const getChildren = (x) => x.childNodes;
const allTheChildren = map(getChildren());

const split = curry((delimiter, string) => string.split(delimiter));

const words = split(" ");

const filterQs = filter((x) => match(/q/i, x));

const keepHighest = (x, y) => (x >= y ? x : y);
