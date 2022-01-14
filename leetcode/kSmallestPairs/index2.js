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
  var s1 = 0
  var s2 = 0
  var index = 0
  do {
    count.push([nums1[s1], nums2[s2]])
    index++
    if ((nums1[s1] + nums2[s2 + 1])>(nums1[s1 + 1] + nums2[s2])) {
      if ((nums1[s1+1] + nums2[s2-1])<(nums1[s1 + 1] + nums2[s2])) {
        s1++
        s2--
        continue
      }
      s1++
    }else{
      if ((nums1[s1-1] + nums2[s2+1])<(nums1[s1] + nums2[s2+1])) {
        s1--
        s2++
        continue
      }
      s2++
    }

  } while (index != k);

  return count

};

console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 3));