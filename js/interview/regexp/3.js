// 颜色值的正则  
// 1. # 匹配  精确匹配
// 2. 十六进制 [] 
// 3. 6 3 个

// 这里不大括号的错误  单元
let reg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/gi;
let string1 = "#F124f01"
let string2 = "#FFFFFF"
console.log(string2.match(reg))

// 正则的匹配规则很严谨
// 这里三到六都可以

// 这里三到六之间不能有空格
let colorReg = /#[0-9a-fA-F]{3,6}/
let regb = /#[0-9a-fA-F]{3,6}/
console.log(colorReg.test("#FFFFFF"))