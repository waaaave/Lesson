import { defaultEquals } from "./util"
import Node from './node'

interface equalsFnType<T> {
  (a: T, b: T): boolean
}

export default class LinkedList<T>{
  protected count: number
  protected next: any
  protected head: any
  protected equalsFn: equalsFnType<T>

  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.next = undefined

    this.equalsFn = equalsFn
    this.head = null
  }

  // 链表尾部添加元素
  push(element: T) {
    const node = new Node(element)
    let current
    if (this.head == null) { // 空链表
      this.head = node
    } else {
      current = this.head
      while (current.next != null) { // 来到尾部
        current = current.next
      }
      current.next = node
    }
    this.count++

  }

  removeAt(index: number) {
    // 边界判定
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index == 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
    }
    return undefined
  }

  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  insert(element: T, index:number){
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index == 0) {
        node.next = this.head
        this.head = node
      }else{
        const previous = this.getElementAt(index-1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  size() {
    return this.count
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    // 获取链表顶点的下一个结点
    let current = this.head.next;
    // 遍历链表中的所有结点
    for (let i = 1; i < this.size() && current != null; i++) {
      // 将当前结点的元素拼接到最终要生成的字符串对象中
      objString = `${objString}, ${current.element}`;
      // 当前结点指向链表的下一个元素
      current = current.next;
    }
    return objString;
  }

  indexOf(element: T){
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  isEmpty(){
    return this.count == 0
  }

}