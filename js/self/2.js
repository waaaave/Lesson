var  add = function(a,b){
    return a + b;
};

var myObject = {
    value: 0,
    increment:function(inc){
        this.value += typeof inc === 'number' ? inc :1;
    }
}
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

var sun = add (3,4);
console.log(sun);

myObject.double = function(){
    var that = this;
    
    var helper = function(){
        that.value = add(that.value,that.value);
    };
    return helper();
}

myObject.double();
console.log(myObject.double());