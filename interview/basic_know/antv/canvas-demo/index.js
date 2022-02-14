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
// 描边
context.strokeStyle = 'yellow'
context.lineWidth = 10
// 开始画
context.strokeRect(0, 0, 100, 100) // 绘制边框
context.fillRect(5, 5, 95, 95) // 填充

context.fillStyle = "black"
context.font = "25px PingFangSC-Regular,sans-serif"
context.fillText("hello world", 150, 100)