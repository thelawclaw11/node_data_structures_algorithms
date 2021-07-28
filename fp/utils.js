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

module.exports = { memoize, curry };
