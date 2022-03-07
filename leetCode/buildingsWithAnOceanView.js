const findBuildings = (buildings) => {
    const stack = [];

    for (let i = buildings.length - 1; i >= 0; i--) {
        const current = buildings[i];
        if (stack.length === 0) {
            stack.push(i);
        } else {
            if (current > buildings[stack[stack.length - 1]]) {
                stack.push(i);
            }
        }
    }

    return stack.reverse();
};

console.log(findBuildings([4, 2, 3, 1]));

const mk1 = (buildings) => {
    const buildingsWithOceanView = [];
    for (let i = 0; i < buildings.length; i++) {
        let maxElement = -Infinity;
        for (let j = i + 1; j < buildings.length; j++) {
            maxElement = Math.max(maxElement, buildings[j]);
        }

        if (maxElement < buildings[i]) {
            buildingsWithOceanView.push(i);
        }
    }
    return buildingsWithOceanView;
};
