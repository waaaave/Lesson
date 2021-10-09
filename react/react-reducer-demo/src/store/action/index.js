import axios from 'axios';

const http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1'
  })
function useTopicList(tab='all',page=1,limit=20,mdernder=true){
    http.get(
        `/topics?tab=${tab}&page=${page}&limit=${limit}&mdernder=${mdernder}`
    )
    .then((res)=>{
        console.log(res);
    })
}

export {useTopicList}