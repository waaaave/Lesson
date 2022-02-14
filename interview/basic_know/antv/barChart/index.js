const data = [
  {
    name: "question",
    value: 17
  },
  {
    name: "schools",
    value: 25
  },
  {
    name: "philosophers",
    value: 35
  }
]

const chartWith = 480;
const chartHeight = 300;
const margin = 15
const containerWidth = chartWith + margin * 2
const containerHeight = chartHeight + margin * 2

const names = Array.from(data, (d) => d.name)
const values = Array.from(data, (d) => d.value)
const indices = Array.from(data, (_, i) => i)

const step = chartWith / names.length
const barWidth = step * 0.8
const xs = Array.from(indices, (i) => i * step)

const y = chartHeight
const vmax = Math.max(...values)
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax))

const nameColor = {
  questions: '#5B8FF9',
  philosophers: '#61DDAA',
  schools: '#657898'
}

const colors = Array.from(names, (name) => nameColor[name])

const canvas = document.getElementById('container-canvas')
canvas.style.width = containerWidth + 'px'
canvas.style.height = containerHeight + 'px'

canvas.width = containerWidth * 2
canvas.height = containerHeight * 2

const context = canvas.getContext('2d')
context.scale(2, 2)

context.translate(margin, margin)

for (const index of indices) {
  const color = colors[index]
  const x = xs[index]
  const barHeight = barHeights[index]
  const value = values[index]

  context.fillStyle = color
  context.fillReact = (x, y - barHeight, barWidth, barHeight)

  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = 'white'
  context.font = '25px pingFangSC - Regular, sans-serif'
  context.fillText(value, x + barWidth / 2, y - barHeight / 2)
}