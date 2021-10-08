import React,{ useState , useEffect } from 'react';
import Details from './details';
import Replies from './replies';
import { useParams } from 'react-router-dom';
import {Alert} from 'antd';
export default function Topic(props) {
    console.log(props,'-------');
    // const{match:{params:{id}}} = props;
    // console.log(id);
    const{id}=useParams();
    console.log(id);
    let [loading,setLoading] = useState(true);
    let [isError,setIsError] = useState(false);
    let [error_msg,setErrorMsg] = useState(' ');
    let [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then(data=>data.json())
        .then(data =>{
            setLoading(false);
            if (data.success) {
                setData(data.data)
            }else{
                setIsError(true);
                setErrorMsg(data.error_msg)
            }
            // console.log(data);
            //状态
            //1.正常状态 2.出错了 3.loading
        })
    },[id])
    //父组件负责发送请求得到数据data,
    return(
        <>
            {isError?(
                <Alert
                message={"请求出错了"}
                closable
                type="error"
                description={
                    <>
                        <p>{error_msg}</p>
                        <p>点击关闭返回上一步</p>
                    </>
                }
                />
            ):(
                <>
                <Details data={data} loading={loading} />
                </>
            )}
            {/* <Details />
            <Replies /> */}
        </>
    )
}