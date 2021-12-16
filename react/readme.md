react vue 

react 是单向数据绑定 ， vue 是双向数据绑定

Input Form 组件 受控组件
  dataList = [{
    id:1,
    name: 'dddddd',
    isAdded: true
  }]

  const dataList[i].isadded = !isAdded

  setDataList(
    dataList
  )

1. table 
  逻辑复杂
  rows button onClick="doAdd.bind(null, item.id)"
  <button>{btnText}</button>
