import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout } from 'antd';

const { Content } = Layout;

class Home extends React.Component {

    render() {
        return (
            <Content className="container">
                Home
            </Content>
        );
    }
}

export default Home;