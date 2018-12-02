// eslint-disable-next-line no-unused-vars
class Stack {
  /**
  * constructor
  * @member {Stack}
  */
  constructor() {
    this.items = [];
  }

  /**
  * addItem -> adds a element to the Stack
  * @param {element} element element to be added
  * @member {Stack}
  */
  addItem(element) {
    this.items.push(element);
  }

  /**
  * isEmpty -> checks whether the stack is empty
  * @member {Stack}
  */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
  * printStack -> prints the current state stack
  * @member {Stack}
  * @return {Stack}
  */
  printStack() {
    return !this.isEmpty() ? this.items.join(', ') : 'Nothing to display';
  }

  /**
  * removeItem -> removes item from the stack
  * @member {Stack}
  * @return {element}
  */
  removeItem() {
    return !this.isEmpty() ? this.items.pop() : 'List is empty';
  }

  /**
  * peek -> gets the top item
  * @member {Stack}
  * @return {element}
  */
  peek() {
    return this.items[this.items.length - 1];
  }
}
