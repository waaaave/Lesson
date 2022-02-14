console.log('开始canvas绘制之旅')
const canvas = document.getElementById('canvas')
// css中设置长宽 需要加单位 元素大小
canvas.style.width = '400px'
canvas.style.height = '200px'

// dom中设置长宽 不需要加单位 绘制区域大小
// 电视，ipad，手机
// canvas容器宽高，绘制区域大小设置
canvas.width = 400;
canvas.height = 200;

// dom的 w 800 h 400
// 可以放 w 1600px h 800px 的元素
// 会自动转换 适应大小

// 绘制上下文
const context = canvas.getContext('2d');

context.fillStyle = 'red'
context.fillRect(0, 0, 50, 50)

context.fillStyle = 'red'
context.fillRect(0, 0, 50, 50)

context.fillStyle = 'blue'
// canvas 默认绘制起点是左上角(0, 0)
// 旋转点基于中心， 其他角落时
context.translate(50, 50)
context.rotate(-Math.PI / 6)
context.scale(2, 3)
context.fillRect(0, 0, 50, 50)