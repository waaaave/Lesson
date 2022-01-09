import React, { useEffect } from 'react';
import MenuBarItem from './menuBarItem/MenuBarItem';
import './MenuBar.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

function MenuBar(props) {
    const { menuBarData } = props
    // console.log(menuBarData.list1,'//////////////////////////');
    useEffect(() => {
        new Swiper('.swiper-container-menu', {
            scrollbar: {
                el: '.swiper-scrollbar-menu',
            }
        })
    }, [])
    return (
        <div className="menu-bar">
            <div className="menu-bar1">
                <div className="swiper-container-menu">
                    {/* swiper  */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div>
                                <MenuBarItem MenuBarData={menuBarData.list1}/>
                                <MenuBarItem MenuBarData={menuBarData.list2}/>
                            </div>
                        </div>
                        <div className="swiper-slide"
                        style={{width: '100%'}}>
                            <div>
                                <MenuBarItem MenuBarData={menuBarData.list3}/>
                                <MenuBarItem MenuBarData={menuBarData.list4}/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-scrollbar-menu"></div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
