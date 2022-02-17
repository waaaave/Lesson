import { Compare, defaultCompare, ICompareFunction } from "./util";
import Node from './node';

interface callbackFn<T> {
  (val: T): void;
}

export default class BinarySearchTree<T> {
  // 1. 构造函数初始化 有初始值
  // 2. compareFn 是可以被继承的属性
  protected root: Node<T> | undefined;
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.root = undefined
  }
  insert(key: T): void {
    if (this.root == undefined) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node: Node<T>, key: T): void {
    if (this.compareFn(key, node.key) === Compare.LESS_THEN) {
      if (node.left == undefined) {
        node.left = new Node(key, node)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == undefined) {
        node.right = new Node(key, node)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  max(): Node<T> {
    return this.maxNode(<Node<T>>this.root)
  }
  private maxNode(node: Node<T>) {
    let current = node
    while (current != undefined && current.right != undefined) {
      current = current.right
    }
    return current
  }
  min(): Node<T> {
    return this.minNode(<Node<T>>this.root)
  }
  private minNode(node: Node<T>): Node<T> {
    let current = node;
    while (current != undefined && current.left != undefined) {
      current = current.left
    }
    return current
  }
  // 遍历方法 先中后 中间节点为标准
  inOrderTraverse(callback: callbackFn<T>) { // 中序遍历 左中右
    this.inOrderTraverseNode(<Node<T>>this.root, callback)
  }
  private inOrderTraverseNode(node: Node<T>, callback: callbackFn<T>) {
    if (node != undefined) {
      this.inOrderTraverseNode(<Node<T>>node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(<Node<T>>node.right, callback)
    }
  }
  preOrderTraverse(callback: callbackFn<T>) { // 先序遍历 中左右
    this.preOrderTraverseNode(<Node<T>>this.root, callback)
  }
  private preOrderTraverseNode(node: Node<T>, callback: callbackFn<T>) {
    if (node != undefined) {
      callback(node.key)
      this.preOrderTraverseNode(<Node<T>>node.left, callback)
      this.preOrderTraverseNode(<Node<T>>node.right, callback)
    }
  }
  postOrderTraverse(callback: callbackFn<T>) { // 后序遍历 左右中
    this.postOrderTraverseNode(<Node<T>>this.root, callback)
  }
  private postOrderTraverseNode(node: Node<T>, callback: callbackFn<T>) {
    if (node != undefined) {
      this.postOrderTraverseNode(<Node<T>>node.left, callback)
      this.postOrderTraverseNode(<Node<T>>node.right, callback)
      callback(node.key)
    }
  }
  search(key: T): boolean | Node<T> {
    return this.searchNode(<Node<T>>this.root, key)
  }
  protected searchNode(node: Node<T>, key: T): boolean | Node<T> {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THEN) {
      return this.searchNode(<Node<T>>node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THEN) {
      return this.searchNode(<Node<T>>node.right, key)
    } else {
      return node
    }
  }
  remove(key: T): void {
    this.removeNode(<Node<T>>this.root, key);
  }
  protected removeNode(node: Node<T> | null, key: T): null | Node<T> {
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) == Compare.LESS_THEN) {
      node.left = <Node<T>>this.removeNode(<Node<T>>node.left, key)
      return node
    }else if (this.compareFn(key, node.key) == Compare.BIGGER_THEN) {
      node.right = <Node<T>>this.removeNode(<Node<T>>node.right, key)
      return node
    }else{
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      if (node.left == null) {
        // 右边还有
        node = <Node<T>>node.right;
        return node
      }else if (node.right == null){
        node = node.left
        return node
      }
      // 两边都有的时候
      // 当找到要移除的节点后，需要找到它右指数最小的节点，为他的继承者
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = <Node<T>>this.removeNode(node.right, aux.key);
      return node


    }
  }
}