import React, { Component } from 'react';
import propTypes  from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    //组件第一次存在于DOM中不会被执行
    //如果已经存在于Dom中才会被执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    //删除的时候执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
        
    }

    render() { 
        return (
            <li onClick={this.handleClick.bind(this)}>
            {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname:propTypes.string.isRequired,
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}

XiaojiejieItem.defaultProps = {
    avname: '28号技师'
}

export default XiaojiejieItem;