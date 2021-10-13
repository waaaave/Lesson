import React, { Component } from "react";
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['合肥推拿','老衲冲刺']
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="addl">增加服务：</label>
                    <input id="addl" className="input" value={this.state.inputValue} onChange = {this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                {/**
                                <li 
                                 onClick ={this.deleteItem.bind(this,index)}
                                 dangerouslySetInnerHTML = {{__html:item}}
                                 key={index + item}>
                                 
                             </li> */},
                                 <XiaojiejieItem
                                 key={index + item}
                                 index = {index}
                                 deleteItem = {this.deleteItem.bind(this)}
                                 content={item} />

                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    inputChange(e){
        // console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })

    }
    //删除列表项
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }

}

export default Xiaojiejie