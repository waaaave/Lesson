# 如何写出优质代码

- 可读性差
setTimeout(blastoff,86400000); //一天的毫秒数
<!-- 有什么可以优化的地方？ -->

const MILLISECONDS_PER_DAY = 60*60*24*1000
setTimeout(blastoff,MILLISECONDS_PER_DAY);

-------------------------------------------------------------

function addToDate(date,month){
  //......
}
const date = new Date();
addToDate(date,1)

addToDate 函数名的语义不够清晰

function addMonthToDate(date,month){
  //.....
}

===================================================

const locations = ["Austin","New York", "San Frankcisco"];

locations.forEach( l => {
  doStufee()...
  doSomeOtherStuff()---
  dispatch(1)
})

locations.forEach( location => {
  doStufee()...
  doSomeOtherStuff()---
  dispatch(location)
})

三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三

function createMicrobrewrey(name){
  //es5 => es6
  const breweryName = name || 'hipster Brew Co.'
}

function createMicrobrewrey(name = 'hipster Brew Co.'){
  const breweryName = name
}

亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖亖

