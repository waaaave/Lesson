const target = {
    filed1: 1,
    filed2: undefined,
    filed3: {
        child: 'child'
    },
    filed4: [2, 4, 8]
}
// 递归 循环引用 会造成死循环 内存溢出
target.target = target

function clone(target, map = new WeakMap()){
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target)?[]:{}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for(const key in target){
            cloneTarget[key] = clone(target[key],map)
        }
    }else{
        return target
    }
}