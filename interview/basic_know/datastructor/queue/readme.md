# 队列
  1. 排序
    .sort

  FIFO(First In First Out) :队列
  FILO(First In Last Out) :栈

  时间复杂度O(n)
   O(1) : 不用循环直接出结果 已经排序好的
   O(n) :  桶 计数
   O(nlogn) : 快速排序 归并排序
   O(n^2) : 冒泡排序 插入排序 选择排序

1. 作业
  扫荡排序算法



- ts-node 
  ts 编译+运行
- tsc -- init 
  生成配置文件
- .\node_modules\.bin\ts-node

- 如何用一张图画出队列数据类型

- ADT 抽象数据类型
    Data 队列里的数据  用数组存储
    可能存在的问题(长度, 连续)
    在es6中可以使用map解决相应问题