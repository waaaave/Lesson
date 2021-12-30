import _ from 'lodash'

const echartsDom: any[] = []

export function echartsResize(eDom: any){
  echartsDom.push(eDom)
  const fn = () => {
    console.log('窗口大小调整');
    
    echartsDom.forEach(item => item.resize())
  }
  window.onresize = _.debounce(fn, 100)
}