// cookie 是用来在前端保存状态 在给http无状态协议带来简单状态 小饼干 基于TCP/IP 
// 我们是动态IP 托管给三大运营服务商 因为 IPV4地址有限
//OSI七层协议物理层 手机 Mac地址 电脑网
// 数圾链路层 俄罗斯套娃
// 请求头get www.baidu.com请求头MacID(get www. baidu.com)I国络网络节点构成
// 网络层 网络节点 IP TCP/IP 
// cookie 存在于HTTP协议中 每次都会带上
// 1. 有大小限制 字符串 a=b ;c=2
// 2. 给服务器之别我们
// 3. localstroge/Sessionstroge websql->IndexDB
const cookie = name =>{ 
  console.log('???', typeof `;${document.cookie}`
  .split(`;${name}=`));
  return `;${document.cookie}`
  .split(`;${name}=`).pop().split(';').shift();
}