const moment = require("moment");

const main = () => {
    const now = moment();
    console.log(now);

    now.add(1, "month");

    console.log(now);
};

main();
