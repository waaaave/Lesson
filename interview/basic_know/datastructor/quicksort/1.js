// 快排 快速 大集合数据都适合的排序方式 比较稳定
const utils = {
  randomNum(){
    return Math.floor(Math.random()*100)
  },
  randomArray(){
    return Array.from(Array(this.randomNum()), () => this.randomNum())
  }
}


let array = utils.randomArray()

console.log(array);