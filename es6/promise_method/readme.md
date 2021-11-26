getUserInfo  需要一些时间，异步的拿到数据
加载前要显示loading...
加载完之后loadingover

如果请求时间小于200ms就不显示loading

- loading + result
  1. 告知用户加载中， 良好的用户体验
  2. 升级一下，如果loading小于200ms就切result会跳眼
  3. 所以等200ms之后在hide

- 用户请求很快的话， < 200ms 
    1. 很快的话  不显示loading
    2. 不快的话  要显示loading

- promise 几个方法是在速度和结果两个维度上比较

- Promise.all 什么时候执行catch？ 只要有一个出错就catch

- Promise.rece 如果第一个是失败的 就失败
  Promise.any 着重的是结果

- 什么在速度和稳定性上兼得？