const { inspect } = require("util");
function prettyPrint(x) {
    console.log(inspect(x, false, null, true));
}

prettyPrint(
    JSON.parse(
        '{"titles":[{"id":790,"comments":[],"flags":[]},{"catalog":"LCCN:sn94051063","comments":[],"flags":["CREATE_TITLE"]}]}'
    )
);
