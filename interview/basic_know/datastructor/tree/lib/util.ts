// ts 枚举类型， 
// 提升代码可读性， 方便修改 
export enum Compare {
  LESS_THEN = -1,
  BIGGER_THEN = 1,
  EQUALS = 0
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a == b) {
    return Compare.EQUALS
  } else if (a > b) {
    return Compare.BIGGER_THEN
  } else {
    return Compare.LESS_THEN
  }
}
// 自定义类型
export type ICompareFunction<T> = (a: T, b: T) => number