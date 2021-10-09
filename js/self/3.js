// func = new function(){
//     var that = Object.beget(this.prototype);
//     var other = this.apply(that,arguments);
//     return (typeof other === 'object'&& other )||that;
// }

var Mammal = function(name){
    this.name = name;
};
Mammal.prototype.get_name = function(){
    return this.name;
};
Mammal.prototype.says = function(){
    return this.saying||' ';
}

var myMammal = new Mammal ('Hewb the Mamml');
var name = myMammal.get_name();
var Cat = function(name){
    this.name = name;
    this.saying = 'miao';
};
Cat.prototype = new Mammal();

Cat.prototype.purr = function (n){
    var s='';
    for (let i = 0; i < n; i++) {
        if (s) {
            s +='-';
        }
            s +='r';
    }
    return  s;
};

Cat.prototype.get_name = function(){
    return this.says() + ' ' +this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();
console.log(says);
console.log(purr);
console.log(name);

var myMammal1 ={
    name : 'herb the mammal',
    get_name : function(){
        return this.name;
    },
    says : function(){
        return this.saying || '';
    }
};

// var block = function (){
//     var oldScope = scope;
//     scope = Object.beget(scope);
//     advance{'{'}
// }

var empty = [];
var numbers = [
    'zero','one','two','three','four','five','six','seven','eight','nine'
]

console.log(empty[1]);
console.log(numbers[1]);
console.log(empty.length);
console.log(numbers.length);

var numbers_object = {
    '0':'zero', '1':'one', '2':'two', '3' :'three', '4': 'four', '5': 'five', '6': 'six','7':'seven','8':'eight','9':'nine'
};

var misc = [
    'string',98.6,true,false,null,undefined,['nested','arrays'],{Object:true},NaN,Infinity
];
console.log(misc.length);

delete numbers[2];
console.log(numbers);

numbers.splice(2,1);
console.log(numbers);

var is_array = (value) =>{
    return value && typeof value ==='object' && value.constructor === Array;
};

console.log(is_array(numbers));
console.log(is_array(numbers_object));

var arr1 = [];
let x = 9;
for (let i = 0; i<x; i++) {
    arr1[i] = []
    
}

for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
        arr1[i][j]=0
        
    }
    
}

console.log(arr1);