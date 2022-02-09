// 循环队列
import Queue from "./queue";
/**
 * @description: 击鼓传花  函数功能注释
 * @param {Array<T> } 传花的元素数组
 * @param {number} 每次传花的次数
 * @return 返回winner 离开的数组
 */

interface HotpotatoResult<T> {
  winner:T 
  elimated: Array<T>
}

function hotPotato<T>(
  // 1. 把数组入队 完成特定的ADT选型
  // 2. 调用ADT方法 完成业务
  elementsList: Array<T>,
  num:number
):HotpotatoResult<T> {
  const queue:Queue<T> = new Queue()
  const elimilatedList: Array<T> = []

  // 入队操作
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimilatedList.push(queue.dequeue() as T)
  }



  return{
    elimated: elimilatedList,
    winner: queue.dequeue() as T
  }

}

const names = ['甲','乙','丙','丁','戊','己','庚','辛','壬','葵']

console.log(hotPotato(names, 6));
