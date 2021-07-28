const compose =
    (...fns) =>
    (...args) =>
        fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const compose2 = (f, g) => (x) => f(g(x));

const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose2(exclaim, toUpperCase);

const head = (x) => x[0];

const reverse = console.log(shout("send in the clowns"));
