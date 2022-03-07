const axios = require("axios");

async function main() {
    try {
        const response = await axios.post(
            "https://tdibnq2t84.execute-api.us-east-2.amazonaws.com/dev/compare-yourself",
            {
                age: 22,
                height: 73,
                income: 6000,
            }
        );
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}
main();
