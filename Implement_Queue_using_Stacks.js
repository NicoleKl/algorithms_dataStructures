var MyQueue = function () {
  this.stack = [];
  this.reversal = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.reversal.length) {
    while (this.stack.length) {
      this.reversal.push(this.stack.pop());
    }
  }
  return this.reversal.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.reversal.length) {
    while (this.stack.length) {
      this.reversal.push(this.stack.pop());
    }
  }
  return this.reversal[this.reversal.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length && !this.reversal.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
