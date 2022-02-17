/**
 * 堆是一个完全二叉树
 * 10 9 8 5 6 7 4 3
 * 10  0  [1, 2]
 * 9   1  [3,4]
 * 8   2  [5, 6]
 * 最低层之外 都是满节点
 *    第i个节点的
 *   1. 左子树节点的位置 2*i + 1
 *   2. 右子树节点的位置 2*i + 2
 *   3. 父节点位置  （i - 1）/ 2
 */

import { ICompareFunction, defaultCompare, Compare } from "../../util/util";

export class MinHeap<T>{
  protected heap: T[];
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.heap = []
  }
  protected getLeftIndex(index: number): number {
    return 2 * index + 1
  }
  protected getRightIndex(index: number): number {
    return 2 * index + 2
  }
  protected getParentIndex(index: number): number | undefined {
    if (index == 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }
  insert(value: T): boolean {
    if (value != null) {
      // 值放入数组的最后
      // 可能违反堆的定义
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
      return true
    }
    return false
  }
  protected shiftUp(index: number): void {
    let parent = <number>this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THEN) {
      this.swap(this.heap, parent, index)
      // 循环 一直执行
      index = parent
      parent = <number>this.getParentIndex(index)
    }

  }

  protected swap(array: T[], exchangeElement: number, exchangedElement: number): void {
    const temp = array[exchangeElement] // 得到原父节点的值
    array[exchangeElement] = array[exchangedElement] // 修改为新的值
    array[exchangedElement] = temp  // 原来的父节点下来了
  }

  getIsArray(): T[] {
    return this.heap;
  }

  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  findMinimum(): T | undefined {
    return this.isEmpty() ? undefined : this.heap[0]
  }
}

export class MaxHeap<T> extends MinHeap<T>{

}