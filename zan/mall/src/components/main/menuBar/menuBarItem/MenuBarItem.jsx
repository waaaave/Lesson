import React from 'react'
import './MenuBarItem.css'

const MenuBarItem = (props) => {
    const { MenuBarData=[] } = props
    // console.log(MenuBarData);
    const  handleclick = () => {
        
    }
    return (
        <>
            <div className='menu-item__box'>
                {
                    MenuBarData.map((item, index) => {
                        return (
                            <div className="item-box" key={index}
                                onClick={() => {
                                    handleclick(`${item.type}`)
                                }}
                            >
                                <img src={item.picUrl} alt="" className="item-box__img" />
                                <div className="item-box__text">{item.type}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenuBarItem