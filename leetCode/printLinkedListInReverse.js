const printLinkedListInReverse = (head) => {
    const stack = [];

    let current = head;

    while (current) {
        stack.push(current);
        current = current.getNext();
    }

    while (stack.length > 0) {
        const n = stack.pop();
        n.printValue();
    }
};
