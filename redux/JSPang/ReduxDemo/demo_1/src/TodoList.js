import React, { Component} from 'react';
import store from './store';
import {changeInputAction,addItemAction,deleteItemAction, getListAction} from './store/actionCreaters'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState());
        this.state = {
           ...store.getState()
        };
        // console.log(this.state);
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }

    componentDidMount(){
        axios.get('https://mock.mengxuegu.com/mock/6168f76d9204560704e9fa3d/reactDemo01/getList')
        .then((res)=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange () {
        // console.log(store.getState())
     
        this.setState({
            ...this.state,
            ...store.getState()
        })
    }

}

export default TodoList;