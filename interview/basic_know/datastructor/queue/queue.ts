/**
 * Queue 队列类
 */

export default class Queue<T> {

  private count: number;
  private lowestCount: number;
  // key value
  // 队头 队尾
  private items: Map<number, T>;

  constructor(){

    this.count = 0
    this.lowestCount = 0
    this.items = new Map()

  }

  enqueue(element: T): void{
    this.items.set(this.count, element)
    this.count++
  }

  dequeue(): T|undefined{
    if (this.isEmpty()){
      return undefined

    }
    // 问题 是否为空
    const result:T | undefined = this.items.get(this.lowestCount)
    this.items.delete(this.lowestCount)
    this.lowestCount++
    return result
  }

  /**
   * 返回队列顶部元素
   */

  peek():T | undefined{
    if(this.isEmpty()){
      return undefined
    }
    return this.items.get(this.lowestCount)
  }

  isEmpty():boolean {
    return this.items.size == 0
  }

  size():number {
    return this.items.size
  }

  clear():void{
    this.items = new Map()
    this.count = 0
    this.lowestCount = 0
  }

  toString():string{
    if(this.isEmpty()){
      return '';
    }

    let objString = `${this.items.get(this.lowestCount)}`
    for (let i = this.lowestCount+1; i < this.count; i++) {
      objString = `${objString},${this.items.get(i)}`
    }

    return objString

  }

}