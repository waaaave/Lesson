function makeSalary(base) {
  // return base + performance
  return function (performance) {
    return base + performance
  }
}
// 计算工资， 闭包？
// 实习生  10000 
// 转正初级程序员  20000
// 中级程序员     30000
// 高级程序员     40000
// 细节  函数嵌套函数 
const s6 = 20000;
const s5 = 10000; // 实习生基本工资
const makeSalaryS5 = makeSalary(s5);
const makeSalaryS6 = makeSalary(s6);
console.log(makeSalaryS5(3000)); // 输入1个参数, 原来是要输入两个参数 
makeSalaryS6((4000));
