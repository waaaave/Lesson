import Mock from 'mockjs'

let list = []
const count = 100

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: i,
      title: '@ctitle(5,10)',
      author: '@cname(2,4)',
      readings: '@integer(300,5000)',
      'star|1-3': '✨',
      'status|1': ['published', 'draft'],
      date: '@datetime'
    })
  )
}

export default {
  tableList: (config) => {
    const { pageNumber = 1, pageSize = 20, title, status, star } = JSON.parse(config.body)
    console.log(config.body,'--------');
    let start = (pageNumber-1)*pageSize
    let end = pageNumber*pageSize
    const mockList = list.filter((item) => {
      return true;
    })
    let pageList = mockList.slice(start,end)
    
    return{
      code: 200,
      data: {
        total: mockList.length,
        items: pageList
      }
    }
  }
}