import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

export default class Test extends Component {
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
    const { num } = this.state;
    // const { handleAdd, num } = this.props;
    return (
      <div>
        {num}
        <Button type="primary" onClick={this.handleAdd}>
          添加
        </Button>
      </div>
    );
  }
}