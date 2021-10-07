var  add = function(a,b){
    return a + b;
};

var myObject = {
    value: 0,
    increment:function(inc){
        this.value += typeof inc === 'number' ? inc :1;
    },
    double :function(){
        var that = this;
        
        var helper = function(){
            that.value = add(that.value,that.value);
        };
        helper();
    }
}
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

var sun = add (3,4);
console.log(sun);

myObject.double(3);
console.log(myObject.value);

var Quo = function(string){
    this.status = string;
};
Quo.prototype.get_status= function(){
    return this.status;
}

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

var array = [3,4];
var sum = add.apply(null,array);
console.log(sum);

var statusObject ={
    status:'A-OK'
}

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);

var sum1 = function(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum +=arguments[i];
        
    }
    return sum;
}
console.log(sum1(4,8,15,16,23,42));

var add1 = function(a,b){
    if (typeof a !=='number'|| typeof b !== 'number') {
        throw{
            name:'TypeError',
            message:'add needs numbers'
        };
    }
    return a+b;
}
console.log(add1(1,3));

var try_it = function(){
    try {
        add1("sevent")
    } catch (e) {
        console.log(e.name + ':' + e.message);
    }
}
try_it();

var hanoi = function(disc,src,aux,dst){
    if (disc>0) {
        hanoi(disc - 1,src,dst,aux);
        console.log('move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi (disc - 1,aux,src,dst);
    }
}
hanoi(3,'Src','Aux','Dst')
console.log(hanoi(3,'Src','Aux','Dst'));