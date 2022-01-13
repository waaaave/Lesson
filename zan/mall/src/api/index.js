// api 下的index.js 文件
// 所有接口方法的列表
import Ajax from './ajax.js'

export const reqmain = () => {
    return Ajax('/home/main')
}

export const reqlist = (page) =>{
    return Ajax('/home/list', {page})
}

export const reqdetail = (id) =>{
    return Ajax(`/detail/${id}`)
}