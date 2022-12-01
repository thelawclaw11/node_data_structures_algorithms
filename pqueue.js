import PQueue from "p-queue";
import pLimit from "p-limit";
import axios from "axios";

const main = async () => {
    const limit = pLimit(1);

    // const queue = new PQueue({ concurrency: 1 });

    const funcs = Array(100)
        .fill(0)
        .map(() => () => axios("https://catfact.ninja/fact"));

    // const result = await queue.addAll(funcs);

    const result = await Promise.all(funcs);

    const normalizedResult = result.map((res) => res.data.fact);
    console.log(normalizedResult);
    console.log(normalizedResult.length);
};

main();
