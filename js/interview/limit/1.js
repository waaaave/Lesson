// promise 限流  封装
// 流程性的写法 ， 写个函数， 写个类 
class Limit {
  constructor(n) {
    this.limit = n; // 限流的数量 并发数
    this.count = 0;  // 正在执行的数量 
    // promise 执行前 this.count++  await  this.count--
    // promise 执行完后, this.count < this.limit  this.queue 出队 
    this.queue = []
  }
  enqueue(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({fn, resolve, reject });
    })
  }
  dequeue() {
    if (this.count < this.limit && this.queue.length) {
      const { fn, resolve, reject}  = this.queue.shift();
      this.run(fn).then(resolve).catch(reject);
    }
  }
  async run(fn) {
    // 运行
    this.count++;
    const value = await fn()
    this.count--;
    this.dequeue();
    return value;
  }
  build(fn) {
    // 分支
    if (this.count < this.limit) {
      return this.run(fn);
    } else {
      return this.enqueue(fn);
    }
  }
}
// [...100 promise ] =>  map  [[3], [3]]
Promise.map = function(list, fn, { concurrency}) {
  const limit = new Limit(concurrency);
  // promise 数组 ， list => promise 数组
  return Promise.all(list.map(item => {
    // fn 执行， 入队  ？ 
    // 函数？ fn() 运行了 
    return limit.build(()=> fn(item))
  }))
}
Promise.map(['a', 'b', 'c', 
  'd','e', 'f',
  'g', 'h', 'i', 
  'j', 'k', 'l',
  'm', 'n', 'o'], (name) => {
    return new Promise(resolve => {
      console.log(name, '+++++++++++++++++++++++=');
      setTimeout(() => {
        // console.log(name);
        resolve(name)
      }, 1000)
    })
  }, {
    concurrency: 3
  })
