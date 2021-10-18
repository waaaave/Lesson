import React , {Component} from 'react';
// 面向对象 扩展
export default class LifeCycle extends Component {
  // 好多生命周期函数
  constructor() {
    super(); //  Component 父类的方法
    this.state = { // 自有状态 
      number: 0, // 
      users: []
    }
    console.log('1. constructor 初始化 props and state');
  }
  // 组件的模板渲染前不要发送请求
  // 用户体验  快 
  componentWillMount() {
    console.log('2. componentWillMount 组件将要挂载');
  }
  componentDidMount() {
    console.log('4. componentDidMount 组件挂载完成');
    // render执行完了
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => {
        console.log(users);
        this.setState({users});
      })
  }
  // 性能优化
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate 询问组件是否需要更新?');
    // if (nextState.number == this.state.number) {
    //   return false
    // }
    return true;
  }
  componentWillUpdate() {
    console.log('6. componentWillUpdate 组件即将更新');
  }
  componentDidUpdate() {
    console.log('7. componentDidUpdate 组件更新完毕');
  }
  render() {
    console.log('3.render渲染， 也就是挂载');
    return (
      <div style={{border: '5px solid red', padding: '5px'}}>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.add.bind(this)}>+</button>
        <ul>
          {
            this.state.users.map(user => (<li key={user.id}>{user.login}</li>))
          }
        </ul>
        <SubCounter number={this.state.number}/>
        {/* {this.state.number%2==0 && <SubCounter number={this.state.number}/>} */}
      </div>
    )
  }
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
}

// 可拔插的组件
class SubCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }
  // 子组件 
  componentWillReceiveProps() {
    console.log('SubCounter 1.componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('SubCounter componentWillUnMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('SubCounter', nextProps, nextState);
    if (nextProps.number % 3 == 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('SubCounter 2.render')
    return (
      <>
      {this.props.number}
      </>
    )
  }
}