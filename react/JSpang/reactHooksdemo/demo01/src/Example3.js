import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentDidMount(){
        console.log(`componentDidMount =>YouClicked ${this.state.count}times`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate =>YouClicked ${this.state.count}times`);
    }
    render() {
        return (
            <div>
                <p>you clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click Me</button>
            </div>
        );
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}

export default Example3;