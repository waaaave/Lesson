- 输出一个count 每秒+1  5秒后停下
  1. useEffect 可以使用多次
    但是有副作用 mount request setState
    利用副作用
    再加一个useEffect 并且传入相应的要改的值
  
  2. setstate 会被闭包影响