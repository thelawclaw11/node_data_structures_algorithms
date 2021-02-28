function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function addTwoNumbers(left, right) {
    let l = left;
    let r = right;
    const dummyHead = new ListNode(0);
    let curr = dummyHead;

    let carry = 0;
    while (l !== null || r !== null) {
        const x = l !== null ? l.val : 0;
        const y = r !== null ? r.val : 0;

        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l !== null) {
            l = l.next;
        }
        if (r !== null) {
            r = r.next;
        }
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}

const alpha = new ListNode(2, new ListNode(4, new ListNode(3)));

const beta = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(alpha, beta));
// console.log(1000000000000000000000000000001);
