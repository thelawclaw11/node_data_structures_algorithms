const axios = require("axios");

// const secureAxios = new axios.Axios({headers: {AUTH: "lsfkjas;ldk"}})
// const openAxios = new axios.Axios()

url, method, body, query;

export const secureHttpFetch = async (options) => {
    const params = {
        AUTH: "sl;kfjsal;kf",
        ...normalize(options),
    };

    return await secureAxios(params);
};

export const openHttpFetch = async (options) => {
    return await openAxios(optionsToAxiosArgs(options));
};
