function encodeTree(root) {
    function traverse(node) {
        if (node.children.length === 0) {
            return "()";
        }

        const children = node.children.map(traverse);
        const sortedChildren = children.slice().sort();

        return ["(", ...sortedChildren, ")"].join("");
    }

    return traverse(root);
}

module.exports = encodeTree;
