const T = (func, lowerLimit, upperLimit, n) => {};

const average = (x, y) => (x + y) / 2;

const M = (func, lowerLimit, upperLimit, n) => {
    const dx = (upperLimit - lowerLimit) / n;
    const start = (lowerLimit + lowerLimit + dx) / 2;

    const intervals = [start];

    for (let i = 1; i < n; i++) {
        intervals.push(intervals[i] + dx);
    }
};
