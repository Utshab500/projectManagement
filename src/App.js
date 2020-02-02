import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';

import Home from './ps/Home.js'
import ProjectManagement from './ps/ProjectManagement.js'
import InitiateProject from './ps/InitiateProject.js'
import Downlines from './ps/Downlines.js'

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider } = Layout;

class App extends React.Component {

  state = {
    collapsed: false,
    showHome: true,
    showProjectManagement: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  renderHome = () => {
    this.setState({
      showHome: true,
      showProjectManagement: false
    });
  }

  renderProjectManagement = () => {
    this.setState({
      showHome: false,
      showProjectManagement: true
    }); 
  }

  renderPage = () => {
    if(this.state.showHome)
      return (<Home />);
    else if(this.state.showProjectManagement)
      return (<ProjectManagement />);
  }

  render() {
    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={ this.renderHome }>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2" >
              <Icon type="tool" />
              <span>Initiate Project</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={ this.renderProjectManagement }>
              <Icon type="setting" />
              <span>Proejct Management</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="down" />
              <span>Downlines</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          {this.renderPage()}
        </Layout>
      </Layout>
    );
  }
}

export default App;
