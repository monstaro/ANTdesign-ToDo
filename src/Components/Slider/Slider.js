import { Slider, InputNumber, Row, Col } from 'antd';
import React, { Component } from 'react';

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={10}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={1}>
          <InputNumber
            min={1}
            max={10}
            style={{ margin: '0 16px'}}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}



export default IntegerStep;