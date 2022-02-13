interface setItemsType<T> {
    [propsName: string]: T

}

export default class Set<T>{
    private items: setItemsType<T>
    constructor() {
        this.items = {}
    }
    // ADT
    has(element: any): boolean {
        // 稍后得看一下
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    add(element: any) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
    }
    delete(element: any) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    clear() {
        this.items = {}
    }
    size() {
        let count = 0
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++
            }
        }
        return count
    }
    values() {
        let values = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key)
            }
        }
        return values
    }
    // 并集
    union(otherSet: Set<T>) {
        const unionSet = new Set()
        const values = this.values()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }
    // 交集
    intersection(otherSet: Set<T>) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallSet = otherValues
        // 从小的里面挑出来某一个 看看大的里面有没有
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallSet = values
        }
        smallSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }
    // 差集
    difference(otherSet: Set<T>) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }
    // 是否属于一个集合的子集
    isSubsetOf(otherSet: Set<T>) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubSet = true;
        // 每一个都必须满足
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubSet = false
                return false
            }
            return true
        })
        return isSubSet
    }
}