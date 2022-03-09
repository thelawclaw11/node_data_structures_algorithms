const alpha = "COL_18901010-19110120_001_01".match(
    /(?<publisher>[A-Z]{3})_(?<dateRange>\d{8}-\d{8})_(?<trayIndicator>[A-Z0-9]{3})_(?<reelNumber>\d{2})/
);

const beta = "Canon".match(
    /(?<publisher>[A-Z]{3})_(?<dateRange>\d{8}-\d{8})_(?<trayIndicator>[A-Z0-9]{3})_(?<reelNumber>\d{2})/
);

console.log(beta);

console.log(alpha);
