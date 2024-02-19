// MyClass.js
import * as React from '../react/packages/react';
import { Component } from '../react/packages/react';


export default class MyClass extends Component {
  constructor(props) {
    super(props)
    console.log('MyClass组件运行了')
    this.state = {
      count: 1
    }
  }
  componentDidMount() {
    console.log('MyClass组件mount完成')
  }
  render() {
    return (
      <div className='MyClass'>
        <div>MyClass组件</div>
        <div>state: {this.state.count}</div>
        <div>name: {this.props.name}</div>
      </div>
    );
  }
}
