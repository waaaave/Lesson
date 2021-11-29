var obj = Object.freeze({
  id:5
//   get id(){
//     return Math.random()
//   }
})

function A(_obj){
  return _obj.id
}

console.log(A(obj))
obj.id = 10;
console.log(A(obj))