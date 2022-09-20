import React, {useState, useEffect} from 'react'
let timer = null
const VerifyCode = ({ onClick }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    timer && clearInterval(timer);
    return () => timer && clearInterval(timer);
  }, []);

  useEffect(()=> {
    if( time === 60 ) timer = setInterval(()=> setTime(time => --time), 1000)
    else if ( time === 0 ) clearInterval(timer)
  }, [time])

  const getCode = () => {
    // 作为组件使用 
    onClick && onClick(()=> {
      setTime(60)
    })
    //直接使用
    setTime(60)
  }

  return (
    <div>
        <button onClick={getCode} className=''>
      { time? `${time}秒后获取`: '获取验证码' }
    </button>

    <button disabled='false'>aaaaaaaaaaaaaa</button>
    </div>
  )
}
export default VerifyCode;