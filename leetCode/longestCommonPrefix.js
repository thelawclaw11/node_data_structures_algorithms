function longestCommonPrefix(array) {
    let result = "";

    if (array.length === 0) {
        return result;
    }

    const maxLength = 200;

    for (let i = 0; i < maxLength; i++) {
        const char = array[0][i];
        if (!char) {
            return result;
        }
        for (let j = 0; j < array.length; j++) {
            if (array[j][i] !== char) {
                return result;
                //result.length === 0 ? "" : result.join("");
            }
        }
        result = result + char;
    }

    return result;
    //result.length === 0 ? "" : result.join("");
}

// const alpha = ["flower", "flow", "flight"];
// const beta = ["a", "b", "c"];
//
// console.log(longestCommonPrefix(alpha));
// console.log(longestCommonPrefix(beta));
console.log(longestCommonPrefix([""]));
