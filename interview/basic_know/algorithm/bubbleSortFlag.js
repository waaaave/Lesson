// 时间复杂度有多个维度
// 最好情况(有序O(n)) 最坏情况(倒序O(n^2)) 平均情况 O(n^2)
// 不需要那么多次交换
// 某趟中没有出现交换的情况，已经有序
const bubbleSortFlag = function (arr) {
  var len = arr.length - 1
  var firstSwrapIndex = 0  // 设置最后交换元素的位置
  console.time('冒泡排序耗时')
  for (var i = 0; i < arr.length; i++) {
    var flag = true
    for (var j = 0; j < len; j++) {
      // 比较相邻两个元素，进行交换
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = false
        firstSwrapIndex = j
      }
      // console.log(arr)
    }
    len = firstSwrapIndex // 最后一次交换的位置
    // console.log(i, arr, len)
    if (flag) break;
  }
  console.timeEnd('冒泡排序耗时')
  return arr
}

console.log(bubbleSortFlag([3, 5, 2, 4, 1, 6, 7, 8, 9]));