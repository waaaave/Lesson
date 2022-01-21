import request from './request'

export function booklist(data) {
    return request({
        url: '/book/list',
        method: 'get',
        data
    })
}
