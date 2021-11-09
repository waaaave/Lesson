// 什么地方用过模板 jsx 小程序 字符串模板符号
// 模板就是占位符 用ejs做模板 <%%>
// 只要you占位符的都叫模板 
let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'
let data = { // 渲染模板编译的时候要用的数据
  name: '晋欣',
  age: 18,
  sex: '男'
}
// 在模板中找到占位符将对应的户数填充占位符，完成编译，得到字符串
// 如何找到占位符？ （ 正则 ） 怎么找(使用正则的replace替换找到)对应（单元）的数据 /g 全匹配
// replace(“aa”) replace(/g)
console.log(render(template,data));
function render(template,data){
  //{m,n}
  let computed = template.replace(/\{\{(\w+)\}\}/g,function(match,key){
    // console.log(match,key);
    // match -> 完整替换
    // key=> obj[key]
    return data[key]
  })
  return computed
}