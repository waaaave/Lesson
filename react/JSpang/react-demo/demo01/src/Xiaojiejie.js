import React, { Component } from "react";
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from "./Boss";
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    //在某一时刻可以自动执行的函数叫生命周期
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    componentWillMount() {
        console.log('组件将要挂载在封面的时刻');
    }

    componentDidMount() {
        console.log('挂载完成的时刻');
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        axios.get('https://mock.mengxuegu.com/mock/6168f76d9204560704e9fa3d/reactDemo01/xiaojiejie')

            .then((res) => {
                console.log('success' + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => { console.log('defeat:' + error) })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }


    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('组件挂载中');
        return (
            <div>
                <div>
                    <label htmlFor="addl">增加服务：</label>
                    <input
                        id="addl"
                        className="input"
                        value={this.state.inputValue}
                        ref={(input) => { this.input = input }}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <div>
                <ul ref={(ul) => { this.ul = ul }} >
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        {/**
                                <li 
                                 onClick ={this.deleteItem.bind(this,index)}
                                 dangerouslySetInnerHTML = {{__html:item}}
                                 key={index + item}>
                                 
                             </li> */}
                                        <XiaojiejieItem
                                            key={index + item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                            content={item} />
                                    </CSSTransition>

                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                </div>

                <Boss></Boss>
            </div>
        )
    }

    inputChange() {
        // console.log(e.target.value);
        this.setState({
            inputValue: this.input.value
        })

    }
    //删除列表项
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    //增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })

    }

}

export default Xiaojiejie