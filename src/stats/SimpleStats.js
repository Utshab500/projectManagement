import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

class SimpleStat extends React.Component {

    render() {
        return (
            <Row gutter={16} type="flex">
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Statistic title="Active Users" value={112893} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Recharge
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default SimpleStat;