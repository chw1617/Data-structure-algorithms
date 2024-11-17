// 一 栈的实现
// 栈的数据结构特点
// 1. 先进后出
// 2. 只能在栈顶添加或删除元素

class Stack<T> {
  private items: T[] = [];
  push(element: T) {
    this.items.push(element);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  size(): number {
    return this.items.length;
  }
  clear(): void {
    this.items = [];
  }
  print(): void {
    console.log(this.items.toString());
  }
}

// 二使用栈
const stack = new Stack<number>();


// 三 栈对应到javascript中的基础知识有：函数调用栈、递归、执行上下文栈