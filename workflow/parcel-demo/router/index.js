import Index from '../pages/index'
import About from '../pages/about'
import GetStart from '../pages/getStart'
import React from 'react';
export const routes = [{
    path: "/",
    exact: true,
    render(props) {
        return (<Index />)
    }
},
{
    path: "/about",
    exact: true,
    render() {
        return (<About />)
    }
},
{
    path: "/getStart",
    exact: true,
    render() {
        return (<GetStart />)
    }
}
]
export const nav = [
    {
        to: "/",
        txt: "首页"
    },
    {
        to: "/getStart",
        txt: "新手入门"
    },
    {
        to: "/about",
        txt: "关于"
    },
]