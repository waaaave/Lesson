// 树 非线性   队列， 栈， 线性 
// 递归的概念来定义树  二叉树 
// 任何一个节点都可以有一个左子树和一个右子树 
// 子节点又可以是一棵独立的树 宝宝树 
export default class Node<T> {
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;
  public parent: Node<T> | undefined;

  constructor(public key: T, parent?: Node<T>) {
    this.left = undefined
    this.right = undefined
    this.parent = parent
  }
  toString(): string {
    return `${this.key}`
  }
}

export enum Colors {
  RED = 0,
  BLACK = 1
}