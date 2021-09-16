// nums[2,7,11,15]
// target = 9;
// 找到和为target的两个整数，输出他们的下标
// for O(n2)->O(nlogn)->O（n）
/**
 * 
 * @func twoSum 两数之和
 * @param nums:int[],target:int
 * @desc 用暴力破解O（n2）,怎么降低时间复杂度
 * @return []
 */
const twoSum = (nums, target) => {
    // console.log(this.name, '----------');
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr = [i, j];
                break;
            }
        }
    }
    return arr;
}
console.log(twoSum([2, 7, 11, 15], 9))

