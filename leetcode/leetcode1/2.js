const twoSum = (nums, target) => {
    // 2 -> {7:j}
    //map初始化 每个数字作为key 下标作为value
    let map = {};// new obj()  知道key O(1) 块，空间开销大，用空间换时间
    let res = [];
    nums.forEach((num, index) => { //O(n)
        // console.log(num, index, '-----------');
        map[num] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        let j = map[target - nums[i]];
        if (j && j !== i) {
            res = [i, j];
            break;
        }
    }
    // console.log(i,j,'??');
    return res;
}
console.log(twoSum([2, 7, 11, 15], 9));