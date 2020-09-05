import React from 'react';

import { Card } from 'antd';


class Task extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    console.log(this.props)
    return (
      <>
         <Card title={this.props.title} style={{ width: 300, margin: 10 }}>
            {this.props.description}
        </Card>
      </>
    );
  }
}


export default Task;