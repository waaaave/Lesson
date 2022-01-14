var kSmallestPairs = function (nums1, nums2, k) {
  var count = []
  if (k >= nums1.length * nums2.length) {
    k = nums1.length * nums2.length
    for (const i in nums1) {
      for (const j in nums2) {
        count.push([nums1[i], nums2[j]])
        if (count.length == k) {
          return count
        }
      }
    }
  }
  var tempt = 1

};

console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 3));