// mac 价格计算函数 可能性很多
// 组合模式， 装饰器模式

class MackBook {
  cost(){
    return 9999;
  }
}
// 组合  装饰
function Memory(makcbook){
  // 改变cost方法
  // 类的方法去改变？
  // js 是原型式面向对象
  let v = makcbook.cost();
  makcbook.cost = () => {
    return v + 1200
  }  // getOwnProperty getOwnSymbols
}

function Engraving(mackbook){
  let v = mackbook.cost();
  mackbook.cost = function(){
    return v + 1000
  }
}

function Insurance(mackbook){
  let v = mackbook.cost();
  mackbook.cost = function(){
    return v + 666
  }
}


let mb = new MackBook(); // 丐版
// 加点内存吧
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost());