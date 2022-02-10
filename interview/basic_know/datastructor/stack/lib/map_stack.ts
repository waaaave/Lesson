// map栈
export default class Stack {
  private items: Map<number, any>
  private items2: Map<any, number>
  private count: number
  

  constructor() {
    this.items = new Map()
    this.items2 = new Map()
    this.count = 0
  }

  push(item: any){
    this.items.set(this.count, item)
    this.items2.set(item, this.count)
    this.count++
  }

  pop(){
    this.count--
    this.items2.delete(this.count)
    let result = this.items.get(this.count)
    this.items.delete(this.count)
    return result
  }

  peak(){
    this.items.get(this.count -1)
  }

  isEmpty(){
    return this.items.size == 0
  }



  hasItem(item: any):boolean{
    return this.items.has(item)
  }

}