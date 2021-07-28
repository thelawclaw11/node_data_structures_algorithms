const encodeTree = require("./encodeTree");

function treesAreIsomorphic(left, right) {
    const leftEncoded = encodeTree(left);
    const rightEncoded = encodeTree(right);

    return leftEncoded === rightEncoded;
}

module.exports = treesAreIsomorphic;
