import React, { Component } from "react";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '请输入要添加的服务',
            list: []
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange = {this.inputChange.bind(this)} />
                    <button>增加服务</button>
                    </div>
                <ul>
                    <li>港派指压</li>
                    <li>精油护体</li>
                    <li>足底按摩</li>
                    <li>请他吃刀削</li>
                </ul>
            </div>
        )
    }

    inputChange(e){
        console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })

    }
}

export default Xiaojiejie