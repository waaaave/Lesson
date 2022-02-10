// import Stack from "./lib/stack";
import Stack from "./lib/map_stack";

/**
 * @description 十进制转二进制
 * @param decNumber {number}
 * @return 二进制  {number}
 */

const decimalToBinaryStack = function(decNumber:number):String{
  let num = decNumber
  let rem:number //余数
  let stack = new Stack()
  console.time('二进制')
  let binaryString = ''

  while (num > 0) {
    // 取余
    rem = Math.floor(num % 2)
    // 余数入栈
    stack.push(rem)
    // 重设num
    num = Math.floor(num / 2)

  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  console.timeEnd('二进制')
  // 一直出栈
  return binaryString
}

console.log(decimalToBinaryStack(4));
