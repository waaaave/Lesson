- 为了代码风格我们怎么拼？
  1. 是否带 ; 使用'' 还是 ""   eslint
  2. ts + es6  ts-node -> @babel/register  -> import es6
    (node 和 react 风格不一致 )

-  多进程 优化
  1. cluster 启动node 多进程

  2. MasterCluster slaverCluster
    cluster.fork() cpus.length() 

  3. 一个端口 -> 一个进程 -> 一个应用 

  4. nginx 天生支持高并发 负载均衡
    k8s 集群