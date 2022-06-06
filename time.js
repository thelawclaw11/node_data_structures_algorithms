const a = [
    "7254a149-4927-4ab5-9f74-89a5e7bcb871",
    "549349c3-e28b-43fc-9fe8-fd2e44f50830",
    "8d193841-5b50-43bc-9af7-c93acb779752",
    "b7060b40-341d-4f64-8e78-08d9f7cf2e94",
    "766a007b-b088-4fd9-b85d-0b613eaf4a3b",
    "bac407ad-2659-485d-8f36-a3fc8cf3b2a8",
];

const b = a.map((s) => `'${s}'`);

console.log(b);

const c = b.join(",");
console.log(c);
