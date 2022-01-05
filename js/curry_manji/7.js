// 闭包 收集参数
function spliceUrl(protocol, hostname) {
  return function (patchname) {
    return `${protocol}${hostname}${patchname}`
  }
}