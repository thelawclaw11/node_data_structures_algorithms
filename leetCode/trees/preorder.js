// function preorder(root) {
//     if (root === null) {
//         return [];
//     }
//     const result = [];
//     const stack = [];
//     stack.push(root);
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//         result.push(current.val);
//
//         for (let i = current.children.length - 1; i >= 0; i--) {
//             stack.push(current.children[i]);
//         }
//     }
//
//     return result;
// }

function preorder(root) {
    const result = [];

    const traverse = (node) => {
        if (node === null) {
            return;
        }

        result.push(node.val);

        for (const child of node.children) {
            traverse(child);
        }
    };
    traverse(root);

    return result;
}
