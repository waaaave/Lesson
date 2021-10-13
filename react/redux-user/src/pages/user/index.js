import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'
import { useUser} from '../../store/actions/index'

const User = function(){
    let {data,loading} = useSelector((state)=>state.user);
    const {loginname} = useParams();
    console.log(loginname);
    const getData = useUser();

    useEffect(()=>{
        getData(loginname)
    },[])
    return(
        <>
        
        {
            data.avatar_url?<img src={data.avatar_url}/>:''
        }
        </>
    )
}

export default User;