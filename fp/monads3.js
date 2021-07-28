const sin = (x) => [Math.sin(x), "sin was called."];
const cube = (x) => [x * x * x, "cube was called."];

const compose = (f, g) => (x) => f(g(x));

// const sineCubed = compose(cube, sin);

// const bind = (f) => (tuple) => {
//     const [x, s] = tuple;
//     const [y, t] = f(x);
//     return [y, s + t];
// };
//
// const composeDebuggable = (f, g) => (x) => {
//     const [y, s] = g(x);
//     const [z, t] = f(y);
//     return [z, s + t];
// };
//
// const unit = (x) => [x, ""];
//
// const lift = (f) => compose(unit, f);
//
// const f = compose(bind(sin), bind(cube));
//
// console.log(f(unit(3)));

const children = (node) => {
    const children = node.childNodes;
    const array = [];

    for (let i = 0; i < children.length; i++) {
        array[i] = children[i];
    }
    return array;
};

const grandchildren = (node) => {
    let output = [];
    const childs = children(node);
    for (let i = 0; i < childs.length; i++) {
        output = output.concat(children(childs[i]));
    }
    return output;
};

const unit = (x) => [x];

const bind = (f) => (list) => {
    let output = [];
    for (let i = 0; i < list.length; i++) {
        output = output.concat(f(list[i]));
    }
    return output;
};
