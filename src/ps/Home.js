import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import SimpleStat from '../stats/SimpleStats.js'

import { Layout, Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

class Home extends React.Component {

    render() {
        return (
            <Content className="container">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            actions={[
                            <Icon type="setting" key="setting" />,
                            <Icon type="edit" key="edit" />,
                            <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <SimpleStat />
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Home;