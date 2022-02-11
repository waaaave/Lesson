import LinkedList from "./lib/linked_list";

const linkedList = new LinkedList();
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
console.log(linkedList.toString());
linkedList.push(6)
linkedList.insert(11,1)
console.log(linkedList.toString());
linkedList.removeAt(3)
console.log(linkedList.indexOf(2));
console.log(linkedList.toString());
