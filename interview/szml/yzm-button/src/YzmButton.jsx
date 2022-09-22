import { useEffect, useState } from "react";

export default function YzmButton(){
    let [btnText, setBtnText] = useState('获取验证码')
    let interval = null
    useEffect(() => {

    },[])

    const startYzm = () => {
        let i = 60
        interval = setInterval(() => {
            i--;
            if (i >= o) {
                setBtnText(`${i}(s)`)
            }else{
                setBtnText('重新获取验证码')
                setDisabled(false)
            }
        }, 1000)
    }

    return(
        <div>
            <button onClick={startYzm} disabled={disabled}>{btnText}</button>
        </div>
    )
}