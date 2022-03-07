var MinStack = function () {
    this.data = [];
    this.mins = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.data.push(val);
    if (val <= this.mins[this.mins.length - 1]) {
        this.mins.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const popped = this.data.pop();
    if (this.mins[this.mins.length - 1] === popped) {
        this.mins.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.mins[this.mins.length - 1];
};

const s = new MinStack();
s.push(3);
s.push(3);
s.push(4);
s.push(2);
s.push(2);
s.push(2);
s.push(5);
s.push(1);

console.log(s);

module.exports = MinStack;
