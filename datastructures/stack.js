class Stack {
  constructor() {
    this.items = [];
  }

  addItem(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    return !this.isEmpty() ? this.items.join(', ') : 'Nothing to display';
  }

  removeItem() {
    return !this.isEmpty() ? this.items.pop() : 'List is empty';
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
