export class Stack<Type> {
  private stack: Type[];

  constructor() {
    this.stack = [];
  }

  push(element: Type): void {
    this.stack.push(element);
  }

  pop(): Type | undefined {
    return this.stack.pop();
  }

  peek(): Type | undefined {
    return this.stack.at(-1);
  }

  length(): number {
    return this.stack.length;
  }
}
