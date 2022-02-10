// LIFO
// 数据怎么存 
  // 数组 map 都可以
    // 数组 ADT 
      // count  栈顶指针
      // items  数据         数组          对象|Map
      // size  数据长度  items.length        .size
      // push   入栈         push         set count++
      // pop    出栈         pop         delete count--
      // clear  清空         array[]        new Map()
      // toString           join('')      
      // isEmpty
      // peek
      // find  

    // 数组是有序的 也是有代价的 数据集比较小的时候好用
    // 存在空间代价
    // 性能上 查找  O(n)  如果使用map O(1)
// 数组模式
export default class Stack {
  private items:any[]

  constructor(){
    this.items = []
  }

  push(item:any){
    this.items.push(item)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  isEmpty(){
    return this.items.length == 0
  }

  clear(){
    this.items = []
  }

  size():number {
    return this.items.length
  }

  toString(){
    return this.items.join('')
  }

  find(item:any){
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        return i
      }
    }
    return -1
  }

}

