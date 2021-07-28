const Maybe = {
    map: function (f) {
        return isNothing(this.value) ? Nothing.of(undefined) : Just.of(f(this.value));
    },
    of: function (x) {
        let newFunctor = Object.assign({}, Maybe);
        newFunctor.value = x;
        return newFunctor;
    },
    mjoin: function () {
        return this.value;
    },

    chain: function (f) {
        return this.map(f).mjoin();
    },
};

const Just = {
    map: function (f) {
        return Just.of(f(this.value));
    },
    of: function (x) {
        let newFunctor = Object.assign({}, Just);
        newFunctor.value = x;
        return newFunctor;
    },
    log: function () {
        console.log(`Just ${this.value}`);
    },
    mjoin: function () {
        return this.value;
    },
    chain: function (f) {
        return this.map(f).mjoin();
    },
};

const Nothing = {
    map: function () {
        return Nothing.of();
    },
    of: function () {
        return Object.assign({}, Nothing);
    },
    log: function () {
        console.log("Nothing");
    },
    mjoin: function () {
        return Nothing.of();
    },
    chain: function (f) {
        return this.map(f).mjoin();
    },
};

const map = (f) => (context) => context.map(f);
const mjoin = (context) => context.mjoin();
const chain = (f) => compose(mjoin, map(f));

const add1 = (x) => x + 1;

const log = (context) => (context.log !== undefined ? context.log() : console.log(context));
const isNothing = (x) => x === null || x === undefined;
const compose =
    (...funcs) =>
    (x) =>
        funcs.reduceRight((y, f) => f(y), x);

const transform = compose(Just.of, add1, add1);

const app = compose(log, map(transform), map(transform), Maybe.of);

const input = 5;

app(input);

// class Just {}
// class Nothing {}
//
// class Maybe {
//     value;
//     constructor(value) {
//         this.value = value;
//     }
//
//     static of(value) {
//         return new Maybe(value);
//     }
//
//     isNothing() {
//         return this.value === null || this.value === undefined;
//     }
//
//     map(func) {
//         if (this.isNothing()) {
//             return Maybe.of(null);
//         }
//
//         const newValue = func(this.value);
//         return Maybe.of(newValue);
//     }
// }

// const alpha = Maybe.of("");
// const beta = alpha.map((string) => string.split(".")[1]);
// const gamma = beta.map((lastName) => lastName[0].toUpperCase() + lastName.slice(1));
//
// console.log(alpha);
// console.log(beta);
// console.log(gamma);
