let miaomiao = {
  _name:'疫苗',
  get name (){
    return this._name;
  }
}

let miaoXy = new Proxy(miaomiao,{
  get(target,prop,receiver){
    // return target[prop];
    return Reflect.get(target,prop,receiver)
  }
  
})

let kexingMiao = {
  __proto__:miaoXy,
  _name:'科兴疫苗'
}

console.log(kexingMiao.name);
console.log(miaomiao.name);
console.log(miaoXy.name);

