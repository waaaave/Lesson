// 如何判断苹果设备？
// 1. 如果是网页端  navigator.userAgent    BOM模型
// 正则
// navigator.platform 返回系统
// 苹果设备UI标准 750px  css 像素375px 桌面 和移动
console.log(/iPhone|iPad|Mac|iPod/i.test(navigator.userAgent));
