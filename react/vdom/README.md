真实DOM
<ul class="list">
    <li class="item">周杰伦</li>
    <li class="item">林俊杰</li>
    <li class="item">王力宏</li>
</ul>

 - 为什么要用react?
    MVVM是时代的意义
    DOM编程很低效,查找DOM修改DOM的内存开销巨大 -> Reacct 不直接操作DOM 操作虚拟DOM

虚拟DOM  html在内存中的表达形式
JSON 表达DOM 片段
1. document.createElement
    ul li 

{
    "type":"ul",
    "props":{
        "class":"list"
    },
    "childern":[
        {
            "type":"li",
            "props":{
                "class":"item"
            },
            "children":['周杰伦']
        }
    ]
}

 - 树的遍历
    前中后 深度优先广度优先

 - 递归
    把大问题拆分成很多类似的小问题
    退出条件 

    JSX -> VDOM