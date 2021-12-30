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
var removeNthFromEnd = function(head, n) {
  let newArr = []
  let dummy = new ListNode()
  let newList = dummy
  while(head){
      newArr.push(head.val)
      head = head.next
  }
  newArr.splice(newArr.length - n, 1)       
  for(let i = 0; i < newArr.length ;i++){
      newList.next = new ListNode(newArr[i]);
      newList = newList.next;
  }
  return dummy.next
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));