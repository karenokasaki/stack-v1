class Stack {
  constructor() {
    this.items = [];
    this.top = -1; // refer to a empty array, -1 = undefined | every list begins with nothing inside
    this.max = 5;
    this.length = 0;
  }

  push(data) {
    this.top++; // vai pro index 0 = primeiro item da lista
    this.items[this.top] = data; // coloca o item no index de top
    this.length++;
  }

  pop() {
    let itemRemoved = this.items[this.top];
    this.items[this.top] = null;
    this.top--;
    this.length--;

    return itemRemoved;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }

  isFull() {
    if (!this.top === this.max - 1) {
      return false;
    }

    return true;
  }
}

module.exports = Stack;
