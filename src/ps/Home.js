import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import LineChart from '../charts/LineChart.js'
import Donut from '../charts/Donut.js'
import Basiccolumn from '../charts/Basiccolumn.js'

import { Layout, Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

class Home extends React.Component {

    render() {
        return (
            <Content className="container">
                <Row gutter={16} type="flex">
                    <Col xs={24} sm={24} md={24} lg={14}>
                        <Card title="Growth">
                            <LineChart />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={10}>
                        <Card title="Trends">
                            <Donut />
                        </Card>
                    </Col>
                </Row>
                <Row className="padding-top-2rem" gutter={16} type="flex">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title="Statistics">
                            <Basiccolumn />
                        </Card>
                    </Col>                    
                </Row>
            </Content>
        );
    }
}

export default Home;