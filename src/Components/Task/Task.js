import React from 'react';

import { Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};



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
         <Card title={this.props.title} extra={<a href="#">Delete</a>} style={{ width: 300, margin: 10 }}>
            {this.props.description}
          {/* {contentList[this.state.key]} */}
        </Card>
      </>
    );
  }
}


export default Task;