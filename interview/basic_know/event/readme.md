- 事件机制分成那两种
  冒泡 bubbling 微软
  捕获 capture 

  冒泡流程
    p -> div -> body(第一个BFC元素) -> html -> document 

  冒泡和捕获是为了解决什么问题？
    事件的发生顺序 事件流
    1-5 捕获过程
    5-6 目标阶段
    6-10 冒泡阶段
- 事件代理
  由于事件冒泡机制 点击了 li之后会冒泡到ul，出发了事件，这就叫做事件代理

- 阻止默认行为 event.preventdefault