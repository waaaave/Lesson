var  add = function(a,b){
    return a + b;
};

var myObject = {
    value: 0,
    increment:function(inc){
        this.value += typeof inc === 'number' ? inc :1;
    },
    
}
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

var sun = add (3,4);
console.log(sun);

myObject.double =function(){
    var that = this;
    
    var helper = function(){
        that.value = add(that.value,that.value);
    };
    helper();
}
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

var hanoi = function(disc,a,b,c){
    if (disc>0) {
        hanoi(disc - 1,a,c,b);
        console.log('move disc ' + disc + ' from ' + a + ' to ' + c);
        hanoi (disc - 1,b,a,c);
    }
}
hanoi(2,'a','b','c')

var walk_the_DOM = function walk (node,func) {
    func(node);
    node = node.firstChild;
    while(node){
        walk(node,func);
        node = node.nextSibling;
    }
}

var getElementByAttribute = function (att,value){
    var results = [];
    walk_the_DOM(document.body,function(node){
        var actual = node.nodeType === 1 && node.getElementByAttribute(att);
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
}

// var fade = function(node){
//     var level = 1;
//     var step = function(){
//         var hex = level.toString(16);
//         node.style.backgroundColor = '#FFFF' + hex + hex;
//         if (level<15){
//             level +=1;
//             setTimeout(step,100);
//         }
//     };
//     setTimeout(step,100);
// };
// fade(document.body);

// var deentityify = function (){
//     var entity ={
//         quot:'"',
//         lt:'<',
//         gt:'>'
//     };
//     return function(){
//         return this.replace(/&([^&;]+);/g,
//         function(a,b){
//             var r = entity[b];
//             return typeof r === 'string' ? r : a;
//         }
//         );
//     };
// }();
// console.log('&lt;&quot;&gt;'.deentityify(  ));

var serial_maker = function (){
    var prefix = '';
    var seq = 0 ;
    return{
        set_prefix : function (p) {
            prefix = String(p);
        },
        set_seq : function (s) {
            seq = s;
        },
        gensym : function () {
            var result = prefix +seq;
            seq += 1 ;
            return result;
        }
    }
}

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
console.log(unique);

// getElement('myBoxDiv').
//     move(350,150).
//     width(100).
//     height(100).
//     color('red').
//     border('10px outset').
//     padding('4px').
//     appendText("Please staand by").
//     on('mousedown',function (m) {
//         this.startDrag(m,this.getNinth(m));
//     }).
//     on('mousemove','drag').
//     on('mouseup','stopDrag').
//     later(200,function () {
//         this.
//             color('yellow').
//             setHTML("What hath God wraught?").
//             slide(400,40,200,200);
//     }).
//     tip('This box is resizeable');