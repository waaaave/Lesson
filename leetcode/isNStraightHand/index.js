/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var isNStraightHand = function(hand, groupSize) {
  const length = hand.length
  var times = length/groupSize
  var shand = hand.sort((a,b)=>a-b)
  console.log(shand);
  var isOK = true
  if(length%groupSize !=0){
      return false
  }
  
  for (let j = 0; j <times; j++) {
    i = 0
    var begin = shand[0]
    for (let i = begin; i < begin + groupSize ; i++) {
      if (shand.indexOf(i)>=0) {
        shand.splice((shand.indexOf(i)),1)
      }else{
        return false
      }
    }
    
  }
  
  
  return isOK
};

console.log(isNStraightHand([8,8,9,7,7,7,6,7,10,6], 2));