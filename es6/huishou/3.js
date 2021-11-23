var myWm = new WeakMap(); // 弱的map对象

class Fish {
  constructor(name){
    myWm.set(this, {
      _fishbone:['草鱼', '鲫鱼', '青鱼']
    })
    this.name = name;
  }
  isBone(){
    return myWm.get(this)._fishbone.includes(this.name)
  }
}

let fish1 = new Fish('草鱼')
let fish2 = new Fish('回鱼')
console.log(fish1.isBone());
console.log(fish2.isBone());