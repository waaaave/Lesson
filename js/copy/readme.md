- JS API 的兼容性
  exrcCommand('copy', true)
  检查了这个API的兼容性， 在所有浏览器版本的除老版本（已退出历史舞台）都使用，可以放心使用

- 剪贴板功能
  1. 兼容性极好的document.execCommand
    ECMA5 -> ECMA6
    document.execCommand 浏览器有执行权
    1. 创建textarea/input
    2. 隐藏
    3. 执行select操作
    4. value
    5. document.execCommend('copy', true)

  2. 更优质的api 但是兼容性有问题
    因为剪贴板是从前端到操作系统
    navigator.clipboard
  3. react hooks 
    工程速度