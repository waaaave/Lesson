const utils = {
  randomNum(){
    return Math.floor(Math.random()*100)
  },
  randomArray(){
    return Array.from(Array(this.randomNum()), () => this.randomNum())
  }
}
// 归并排序
function merge(left,right){
  let result = []
  let i = 0  
  let j = 0
console.log(left,'222222222222222222222222');
  while(i < left.length && j < right.length){
    if (left[i] <= right[j]) {
      result.push(left[i++])
    }else{
      result.push(right[j++])

    }
  }
  if (i < left.length) {
    result.push(...left.slice(i))
  }else{
    result.push(...right.slice(j))
  }
  return result
}

function mergeSort(array){
  if(array.length < 2){
    return array
  }
  let m = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0,m))
  let right = mergeSort(array.slice(m))
  return merge(left, right)
}

console.log(mergeSort(utils.randomArray()));
