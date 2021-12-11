import Mock from 'mockjs'
import tableAPI from './tabel'

// 接受的匹配规则是正则
Mock.mock(/\/table\/list/,'post',
  tableAPI.tableList)