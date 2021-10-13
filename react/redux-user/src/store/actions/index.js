// reducer action api 交流
import axios from 'axios'
//axios -> cnode -> useDispatch -> reducer 重新运行  数据通信
//action
import {useDispatch} from 'react-redux'
const http = axios.create({
    baseURL:'https://cnodejs.org/api/v1',
})

function useUser(){  //高阶函数
    let dispatch = useDispatch();
    return function(loginname){
        // dispatch({
        //     typpe:'user_loading'
        // })
        http.get(`/user/${loginname}`).then((res)=>{
            console.log(res)
            dispatch({
                type:'user_loadover',
                data:res.data.data
            })
        })
    }
}

export {useUser};