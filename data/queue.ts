// 队列的实现，数组的方式实现
// 队列的特点
// 1、先进先出
// 2、队列的操作

class Queue<T> {
  private items: T[] = [];
  enqueue(element: T) {
    this.items.push(element);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  front(): T | undefined {
    return this.items[0];
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

// 使用队列
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);


// 对应到javascript中的基础知识有：事件循环机制event loop
