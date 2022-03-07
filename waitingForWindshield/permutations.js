const permutations = (n, set) => {
    const permutations = [];
    const accum = [];
    const counter = {};

    const F = () => {
        if (accum.length === n) {
            permutations.push([...accum]);
            return;
        }

        for (const element of set) {
            if (counter[element]) accum.push(element);
            F();
            accum.pop();
        }
    };

    F();
    return permutations;
};

console.log(permutations(6, ["a", "b", "c"]).length);
