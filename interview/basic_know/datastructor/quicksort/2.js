// 3 1 6 5 7 2 4

const utils = {
  randomNum(){
    return Math.floor(Math.random()*1000)
  },
  randomArray(){
    return Array.from(Array(this.randomNum()), () => this.randomNum())
  }
}

function quickSort(array){

  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length - 1)
  let right = array.filter((v) => v > pivot)
  // 退出条件

  return[...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(utils.randomArray()));