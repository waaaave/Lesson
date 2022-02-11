// 指针特别灵活 节点单独构成基类
// node 中包含两部分内容 
export default class Node<T>{
  element: any
  next: any

  constructor(element: T, next?: any){
    this.element = element
    this.next = next
  }

}