const bubbleSort = function(arr) {
  console.time('冒泡')
  for(let i = 0; i < arr.length; i++ ){
    // 排好的位置在最后
    for (let j = 0; j < arr.length-1-i; j++) {
      if (arr[j]>arr[j+1]){
        // 升序排序
        // 空间复杂度 O(1)
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
      
    }
  }
  console.timeEnd('冒泡')

  return arr
}

console.log(bubbleSort([2, 9, 3, 4, 8, 3]));