function spliceUrl(protocol, hostname, patchname) {
  return `${protocol}${hostname}${patchname}`
}
// 复用性
const url1 = spliceUrl('https://', 'juejin.cn', '/post/6978685539985653767/')

const curry = (fn, ...args) => 
  args.length >=fn.length
  ?fn(...args)
  : (..._args) => curry(fn, ...args, ..._args)


const currySpliceUrl = curry(spliceUrl, 'https://', 'juejin.cn')

console.log(currySpliceUrl( '/post/6978685539985653767/'))