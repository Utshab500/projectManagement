import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout } from 'antd';

const { Content } = Layout;

class Downlines extends React.Component {

    render() {
        return (
            <Content className="container">
                Initiate Project
            </Content>
        );
    }
}

export default Downlines;