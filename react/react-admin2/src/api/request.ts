import axios from "axios";

const axiosInstance = axios.create({
  timeout:6000
})

type Method = 'get' | 'post'; // ts 的元组

export const request =(
  method:Method,
  url:string,
  data?:any
) =>{
  //get post 区别是什么
  if(method === 'post'){
    return axiosInstance.post(url,data)
  }else{
    return axiosInstance.get(url,{
      params: data
    })
  }
}