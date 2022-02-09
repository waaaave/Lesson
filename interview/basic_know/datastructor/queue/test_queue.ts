// ES6 模块化

import Queue from './queue'

const queue:Queue<String> = new Queue()

queue.enqueue('甲')
queue.enqueue('乙')
queue.enqueue('丙')
queue.enqueue('丁')
queue.enqueue('戊')
queue.enqueue('己')

console.log(queue.toString());
queue.dequeue()
console.log(queue.toString());
