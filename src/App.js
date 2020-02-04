import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import './custome.css';

import Home from './ps/Home.js'
import ProjectManagement from './ps/ProjectManagement.js'
import InitiateProject from './ps/InitiateProject.js'
import Downlines from './ps/Downlines.js'

import { Layout, Menu, Icon, Avatar, Popover } from 'antd';
import { Row, Col } from 'antd';

const { Header, Sider } = Layout;
const content = (
  <div>
    <p>Profile</p>
    <p>Log out</p>
  </div>
);

class App extends React.Component {

  state = {
    collapsed: false,
    page: Home,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  renderHome = () => {
    this.setState({
      page: Home
    });
  }

  renderInitiateProject = () => {
    this.setState({
      page: InitiateProject
    }); 
  }

  renderProjectManagement = () => {
    this.setState({
      page: ProjectManagement
    }); 
  }

  renderDownlines = () => {
    this.setState({
      page: Downlines
    }); 
  }

  renderPage = () => {
    return(<this.state.page />);
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
            <Menu.Item key="2" onClick={ this.renderInitiateProject }>
              <Icon type="tool" />
              <span>Initiate Project</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={ this.renderProjectManagement }>
              <Icon type="setting" />
              <span>Proejct Management</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={ this.renderDownlines }>
              <Icon type="down" />
              <span>Downlines</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Row>
            <Col span={6}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Col>
            <Col span={6} offset={12}>
              <div className="pull-right">
                <Popover content={content} title="Krishanu Bhattacharya" placement="bottom">
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>K</Avatar>
                </Popover>
              </div>
            </Col>
          </Row>
          </Header>
          {this.renderPage()}
        </Layout>
      </Layout>
    );
  }
}

export default App;
