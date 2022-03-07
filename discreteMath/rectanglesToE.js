// const rectangle = (n) => {
//     if (n === 1) {
//         return { length: 1, width: 2 };
//     }
//
//     const prev = rectangle(n - 1);
//
//     return { length: Math.max(prev.length, prev.width), width: prev.length + prev.width };
// };

const buildRectangles = (n, initialRectangle) => {
    const rectangles = [
        {
            ...initialRectangle,
            area: initialRectangle.length * initialRectangle.width,
            perimeter: 2 * (initialRectangle.length + initialRectangle.width),
        },
    ];

    for (let i = 1; i < n; i++) {
        const prev = rectangles[i - 1];

        const length = Math.max(prev.length, prev.width);
        const width = prev.length + prev.width;

        rectangles.push({
            length,
            width,
            area: length * width,
            perimeter: 2 * (length + width),
        });
    }

    return rectangles;
};

const findRatios = (rectangles) => {
    return rectangles.map((rectangle, i) => {
        if (i === 0) {
            return rectangle;
        }

        const areaRatio = rectangle.area / rectangles[i - 1].area;
        const perimeterRatio = rectangle.perimeter / rectangles[i - 1].perimeter;

        return {
            ...rectangle,
            areaRatio,
            perimeterRatio,
        };
    });
};

const alpha = { length: 1, width: 2 };
const beta = { length: 2, width: 5 };

const rectangles = buildRectangles(500, beta);

const ratios = findRatios(rectangles);

const last = ratios[ratios.length - 1];

console.log(last);

console.log(last.perimeterRatio * last.perimeterRatio);

const phi = last.perimeterRatio;

const phis = [1, phi];

for (let i = 2; i <= 10; i++) {
    phis.push(phis[i - 2] + phis[i - 1]);
}
console.log(phis);
