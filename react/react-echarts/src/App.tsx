import { useState, createRef, RefObject, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import * as eCharts from 'echarts'
import { echartsResize } from './util'
import LineChart from './components/LineChart'

// canvas dom 绘制图画

function App() {
  // any 类型 <T> current: null | HTMLDivElement 
  // @types/react RefObject<HTMLDivElement>
  // 万能 any 匹配一切
  // RefObject  自定义type   @types/react
  // HTMLDivElment type  html 标签
  const eChartsRef:RefObject<HTMLDivElement> = createRef()
  const [lineChartData, setLineChartData] = useState({
    xData: [
      "2021/08/13",
      "2021/08/14",
      "2021/08/15",
      "2021/08/16",
      "2021/08/17",
      "2021/08/18",
    ],
    seriesData: [22, 19, 88, 66, 5, 90],
  })
  
  useEffect(() => {
    // console.log(eChartsRef.current)
    // init 参数 HTMLElement 
    const myChart = eCharts.init(eChartsRef.current as HTMLElement)
      let option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '祙子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
    }
    myChart.setOption(option)
    echartsResize(myChart)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setLineChartData({
        xData: [...lineChartData.xData, "2000/01/01"],
        seriesData: [...lineChartData.seriesData,
           Math.floor(Math.random() * 1000)]
      })
    }, 1500)
  }, [])
  return (
    <div className="HomeWrapper">
      <div className="chartWrapper">
        <div ref={eChartsRef} className="chart"></div>
      </div>
      <div className="chartWrapper">
        <LineChart 
          title="折线图模拟数据"
          xData={lineChartData.xData}
          seriesData={lineChartData.seriesData}
        />
      </div>
    </div>
  )
}

export default App
