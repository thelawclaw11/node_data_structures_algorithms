function lca(root, left, right) {
    const leftPath = getPath(root, left);
    const rightPath = getPath(root, right);

    for (let i = 0; i < Math.max(leftPath.length, rightPath.length); i++) {
        if (leftPath[i] !== rightPath[i]) {
            return leftPath[i - 1];
        }
    }
}

function getPath(root, targetValue) {
    const path = [root.value];

    function traverse(node) {
        if (node.value === targetValue) {
            return path;
        }
        for (const child of node.children) {
            path.push(child.value);
            const p = traverse(child);
            if (p) {
                return p;
            }
            path.pop();
        }
    }

    return traverse(root);
}

module.exports = lca;
