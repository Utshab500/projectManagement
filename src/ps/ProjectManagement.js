import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout } from 'antd';

const { Content } = Layout;

class ProjectManagement extends React.Component {

    render() {
        return (
            <Content className="container">
                Project Management
            </Content>
        );
    }
}

export default ProjectManagement;