function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    let L = list1;
    let R = list2;

    const dummyHead = new ListNode();

    let merged = dummyHead;

    while (R && L) {
        if (!R) {
            merged.next = L;
            merged = merged.next;
            L = L.next;
        } else if (!L) {
            merged.next = R;
            merged = merged.next;
            R = R.next;
        } else if (L.val === R.val) {
            merged.next = R;
            merged = merged.next;

            merged.next = L;
            merged = merged.next;

            L = L.next;
            R = R.next;
        } else if (R.val < L.val) {
            merged.next = R;
            merged = merged.next;
            R = R.next;
        } else if (L.val < R.val) {
            merged.next = L;
            merged = merged.next;
            L = L.next;
        }
    }

    return dummyHead.next;
};

console.log(
    mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
    )
);
