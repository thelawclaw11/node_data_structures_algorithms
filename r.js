const axios = require("axios");

const prodCookie = ``;
const stageCookie = ``;

const prodBase = "https://app.pulseline.cloud";
const stageBase = "https://app.pulselinestage.cloud";

const prodConfig = {
    base: prodBase,
    cookie: prodCookie,
};

const stageConfig = {
    base: stageBase,
    cookie: stageCookie,
};

const config = prodConfig;

const SIZE = 50;

const main = async () => {
    const containers = [];

    const firstPage = await axios.get(
        `${config.base}/flow-api/containers-active?size=${SIZE}&sort=id`,
        {
            headers: { cookie: config.cookie },
        }
    );
    if (firstPage.data._embedded.containers) {
        containers.push(...firstPage?.data?._embedded.containers);
    }

    // console.log(firstPage);

    const totalPages = firstPage.data.page.totalPages;

    for (let i = 1; i < totalPages; i++) {
        const nextPage = await axios.get(
            `${config.base}/flow-api/containers-active?size=${SIZE}&page=${i}&sort=id`,
            { headers: { cookie: config.cookie } }
        );

        if (nextPage?.data?._embedded?.containers) {
            containers.push(...nextPage?.data?._embedded?.containers);
        }
    }

    const containerIds = containers.map((container) => container.id);

    const table = {};
    const set = new Set(containerIds);

    // console.log(table);
    console.log("Expected items: ", firstPage.data.page.totalElements);
    console.log("total items received: ", containerIds.length);
    console.log("unique ids: ", set.size);
};

main();
