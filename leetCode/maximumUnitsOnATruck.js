const maximumUnits = (boxTypes, truckSize) => {
    const sortedByMostEfficientlyPacked = boxTypes.sort((a, b) => a[1] - b[1]);

    let boxesOnTruck = 0;
    let unitsOnTruck = 0;

    while (
        boxesOnTruck < truckSize &&
        sortedByMostEfficientlyPacked.length > 0
    ) {
        const mostEfficient = sortedByMostEfficientlyPacked.pop();
        const remainingSpace = truckSize - boxesOnTruck;
        const numberOfBoxesWeCanLoadFromMostEfficient = Math.min(
            remainingSpace,
            mostEfficient[0]
        );
        boxesOnTruck += numberOfBoxesWeCanLoadFromMostEfficient;
        unitsOnTruck +=
            numberOfBoxesWeCanLoadFromMostEfficient * mostEfficient[1];
    }

    return unitsOnTruck;
};

console.log(
    maximumUnits(
        [
            [1, 3],
            [2, 2],
            [3, 1],
        ],
        4
    )
);
