import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9090/';
// axios.defaults.baseURL = 'http://47.97.18.80:9090/';
export default function Ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, rejet) => {
        let Promise;
        if (type === 'GET') {
            Promise = axios.get(url, {
                params: data
            })
        } else {
            Promise = axios.post(url, {
                params: data
            })
        }
        Promise.then((response) => {
            resolve(response);
        }).catch((error) => {
            console.error("数据请求异常!", error)
        })
    })

}
