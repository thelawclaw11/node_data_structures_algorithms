const {
    compose,
    add,
    prop,
    match,
    inspect,
    curry,
    toString,
    concat,
} = require("@mostly-adequate/support");
const moment = require("moment");
const { identity } = require("@mostly-adequate/support");

// class Container {
//     constructor(x) {
//         this.$value = x;
//     }
//
//     static of(x) {
//         return new Container(x);
//     }
// }
//
// Container.prototype.map = function (f) {
//     return Container.of(f(this.$value));
// };

const map = curry((f, anyFunctor) => anyFunctor.map(f));

class Maybe {
    static of(x) {
        return new Maybe(x);
    }

    get isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    constructor(value) {
        this.$value = value;
    }

    map(fn) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
    }

    inspect() {
        return this.isNothing ? "nothing" : `Just(${inspect(this.$value)})`;
    }
}

const safeHead = (xs) => Maybe.of(xs[0]);

const streetName = compose(map(prop("street")), safeHead, prop("addresses"));
//
// console.log(streetName({ addresses: [] }));
// console.log(streetName({ addresses: [{ street: "shady ln", number: 4201 }] }));

class Either {
    constructor(x) {
        this.$value = x;
    }

    static of(x) {
        return new Right(x);
    }
}

class Left extends Either {
    map(f) {
        return this;
    }

    inspect() {
        return `Left(${inspect(this.$value)})`;
    }
}
class Right extends Either {
    map(f) {
        return Either.of(f(this.$value));
    }

    inspect() {
        return `Right(${inspect(this.$value)})`;
    }
}

const left = (x) => new Left(x);

// console.log(
//     Either.of("rain")
//         .map((str) => `b${str}`)
//         .inspect()
// );
//
// console.log(
//     left("rain")
//         .map((str) => `It's gonna ${str}, better bring your umbrella!`)
//         .inspect()
// );
//
// console.log(Either.of({ host: "localhost", port: 80 }).map(prop("host")).inspect());
//
// console.log(left("rolls eyes...").map(prop("host")).inspect());

const either = curry((f, g, e) => {
    let result;

    switch (e.constructor) {
        case Left:
            result = f(e.$value);
            break;
        case Right:
            result = g(e.$value);
            break;
    }
    return result;
});

const getAge = curry((now, user) => {
    const birthDate = moment(user.birthDate, "YYYY-MM-DD");

    return birthDate.isValid()
        ? Either.of(now.diff(birthDate, "years"))
        : left("Birth date could not be parsed");
});
//
// console.log(getAge(moment(), { birthDate: "2005-12-12" }).inspect());
// console.log(getAge(moment(), { birthDate: "July 4, 2001" }).inspect());

// const fortune = compose(concat("If you survive, you will be "), toString, add(1));
//
// const zoltar = compose(map(console.log), either(identity, fortune), getAge(moment()));
//
// zoltar({ birthDate: "2005-12-12" });
// zoltar({ birthDate: "Balloons!" }).inspect();

console.log(3 * (4 / 0));
