export default class DoubleQueue<T> {
  private count: number
  private lowestCount: number
  private items: Map<number, T>;

  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = new Map()
  }

  /**
   * @description 在lowesCount 方向头方向入队
   * @param {T} element 
   */
  addFront(element: T): void {
    this.lowestCount--
    this.items.set(this.lowestCount, element)
  }

  addBack(element: T): void {
    this.items.set(this.count, element)
    this.count++
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items.get(this.lowestCount)
    this.items.delete(this.lowestCount)
    this.lowestCount++
    return result
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items.get(this.count)
    this.items.delete(this.count)
    
    return result
  }

  isEmpty(): boolean {
    return this.items.size == 0
  }

  clear(): void {
    this.items = new Map()
    this.count = 0
    this.lowestCount = 0
  }

  size(): number {
    return this.items.size
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items.get(this.lowestCount)}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items.get(i)}`
    }

    return objString

  }

}