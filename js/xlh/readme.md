let value = ?;
if(value == 'a' || value == 'b' || value == 'c'){

}

if(['a','b','c'].includes(value)){

}

-------------------------------------------------------
let a: boolean ;
if(a){
  return 'toto'
}else{
  return 'tutu'
}

let a: boolean ;
if(a){
  return 'toto'
}

return 'tutu'

---------------------------------------------------

const toto = {'name':'toto'}
const other = {'other':'other'}

if(condition){
  other.name = toto.name
}

一个对象扩展一个 key ->value

{
  ...other,
  condition && 'name':toto.name

}

if(condition){
  todo()
}
=>
consition && todo()