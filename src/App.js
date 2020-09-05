import React, { Component } from 'react';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import MainContainer from './Components/MainContainer';
import { TasksProvider } from './TasksContext';
const { Header, Content, Footer } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'addtask'
    }
  }
  updateActivePage = (currentPage) => {
    this.setState({
      activePage: currentPage
    })
  }
  render() {
    return (
    <TasksProvider>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => this.updateActivePage('addtask')}>Add Task</Menu.Item>
        <Menu.Item key="2" onClick={() => this.updateActivePage('alltasks')}>All Tasks</Menu.Item>
        <Menu.Item key="3" onClick={() => this.updateActivePage('archive')}>Archive</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="site-layout-content">
      <MainContainer activePage={this.state.activePage}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </TasksProvider>
    )
  };
}

export default App;
