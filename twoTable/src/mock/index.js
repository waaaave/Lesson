import Mock from "mockjs"
import tableAPI from "./table"

// 正则模拟配置后端路由接口
Mock.mock(/\/table\/list/, "post", tableAPI.tableList)

