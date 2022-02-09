/**
 * 1. js reverse 循环比较
 * 2. 双指针
 * 3. 双端队列
 * @param aString 
 */

import DoubleQueue from "./double_queue";

function palindromeChecker(aString:String):boolean{

  if(aString === undefined || 
      aString == null ||
      aString !== null && aString.length == 0
    ){
      return false
    }

  const lowerString: string = aString.toLocaleLowerCase().split('').join('')

  const queue:DoubleQueue<String> = new DoubleQueue()

  for (let i = 0,len = lowerString.length; i < len; i++) {
    queue.addBack(lowerString.charAt(i))
  }

  while(queue.size() > 1){
    if(queue.removeFront() !== queue.removeBack() ){
      return false
    }
  }

  return true

}

console.log(palindromeChecker('abba'));
