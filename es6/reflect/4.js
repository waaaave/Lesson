(function(){
  'use strict';
  console.log(this);
  var frozen = {1:81};
  Object.freeze(frozen);
  // frozen[1] = 'miaomiao';
  Reflect.set(frozen,'1','miaomiao');
})()