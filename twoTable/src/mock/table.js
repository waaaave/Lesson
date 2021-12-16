/**
 * @mock 生成mock数据
*/

import Mock from "mockjs"

let list = []
const count = 300

// 生成300条数据
for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: i,
      title: "@city()***公司",
      synthesize: "@float(0, 100, 2, 2)",
      innovative: "@float(0, 100, 2, 2)",
      business: "@float(0, 50000, 1, 1)",
      revenue: "@float(0, 5000, 2, 2)",
      hard: "@float(0, 50000, 2, 2)",
      isAdded: false
    })
  )
}

export default {
  tableList: () => {
    let pageList = list

    return {
      code: 200,
      data: {
        total: list.length,
        items: pageList
      }
    }
  }
}