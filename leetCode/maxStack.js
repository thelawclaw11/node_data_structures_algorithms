var MaxStack = function () {
    this.data = [];
    this.maxs = [-Infinity];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.data.push(x);
    if (x >= this.maxs[this.maxs.length - 1]) {
        this.maxs.push(x);
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    const popped = this.data.pop();
    if (this.maxs[this.maxs.length - 1] === popped) {
        this.maxs.pop();
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    return this.maxs[this.maxs.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    const poppedMax = this.maxs.pop();
    const newData = [];
    const lastIndexOfPoppedMax = this.data.lastIndexOf(poppedMax);
    for (let i = 0; i < this.data.length - 1; i++) {
        if (i !== lastIndexOfPoppedMax) {
            newData.push();
        }
    }
    this.data = newData;
};
