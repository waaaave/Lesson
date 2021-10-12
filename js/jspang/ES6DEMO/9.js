//proxy 代理es6 增强对象和函数 (预处理)

let obj = {
    add:function(val){
        return val+100;
    },
    name:'wave'
}
console.log(obj.add(100));

let pro = new Proxy({
    add:function(val){
        return val+100;
    },
    name:'wave'
},{//set apply
    get : function(target,key,property){
        console.log('come in get');
        return target[key];
    },
    set : function(target,key,value,receiver){
        console.log(`setting ${key} change to ${value}`);
        return target[key] = value;
    }
})

console.log(pro.name);
pro.name = 'waave'
console.log(pro.name);

let tar = () =>{
    return 'I am wave';
}
let handler = {
    apply(tarfet,ctx,args){
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}

let pro1 = new Proxy(tar,handler)
console.log(pro1());