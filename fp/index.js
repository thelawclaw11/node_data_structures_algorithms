const { prop } = require("@mostly-adequate/support");
const { inspect } = require("@mostly-adequate/support");
const memoize = (f) => {
    const cache = {};

    return (...args) => {
        const argStr = JSON.stringify(args);
        cache[argStr] = argStr in cache ? cache[argStr] : f(...args);
        return cache[argStr];
    };
};

const curryHelper = (func, args, prevArgs) => {
    if (args.length + prevArgs.length >= func.length) {
        return func(...prevArgs, ...args);
    }
    return (...newArgs) => curryHelper(func, newArgs, [...prevArgs, ...args]);
};

const curry =
    (fn) =>
    (...args) =>
        curryHelper(fn, args, []);

const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));

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
const allTheChildren = map(getChildren);

const split = curry((delimiter, string) => string.split(delimiter));

const words = split(" ");

const filterQs = filter((x) => match(/q/i, x));

const keepHighest = (x, y) => (x >= y ? x : y);

const compose =
    (...fns) =>
    (...args) =>
        fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const compose2 = (f, g) => (x) => f(g(x));

const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose2(exclaim, toUpperCase);

const head = (x) => x[0];

const reverse = reduce((acc, x) => [x, ...acc], []);
const last = compose(head, reverse);

const lastUpper = compose(toUpperCase, head, reverse);
const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
const toLowerCase = (x) => x.toLowerCase();

const snakeCase = compose(replace(/\s+/gi, "_"), toLowerCase);

const intercalate = curry((str, xs) => xs.join(str));

const initials = compose(intercalate(". "), map(compose(toUpperCase, head)), split(" "));

const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
});

const strLength = (s) => s.length;
const join = curry((what, xs) => xs.join(what));
