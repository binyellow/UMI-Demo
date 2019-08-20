import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Test from './Test';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  handleAdd = () => {
    this.setState(state => {
      return {
        num: ++state.num,
      };
    });
  }

  render() {
    return (
      <div>
        <p>woceshi</p>
        <Test handleAdd={this.handleAdd} num={this.state.num}></Test>
      </div>
    );
  }
}