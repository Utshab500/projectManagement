import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Card } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

class ProjectManagement extends React.Component {

    render() {
        return (
            <Content className="container">
                <Row gutter={16} type="flex">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Title level={3}>Project Name</Title>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <b>Start Date:</b> dd/mm/yyyy
                    </Col>
                    <Col className="align-center" xs={12} sm={12} md={8} lg={8}>
                        <b>End Date:</b> dd/mm/yyyy
                    </Col>
                    <Col className="align-right" xs={24} sm={12} md={8} lg={8}>
                        <b>Assigned to:</b> Bablu
                    </Col>
                </Row>
                <hr />
                <Row className="padding-top-2rem" gutter={16} type="flex">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title="Description">
                            Review the available independent audit reports for Microsoft's Cloud services, which provide information about compliance with data protection standards and regulatory requirements, such as International Organization for Standardization (ISO), Service Organization Controls (SOC), National Institute of Standards and Technology (NIST), Federal Risk and Authorization Management Program (FedRAMP), and the General Data Protection Regulation (GDPR)
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={18}>
                        <Row className="padding-top-1rem" gutter={16} type="flex">
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Card title="Instruction">
                                    Review the available independent audit reports for Microsoft's Cloud services, which provide information about compliance with data protection standards and regulatory requirements, such as International Organization for Standardization (ISO), Service Organization Controls (SOC), National Institute of Standards and Technology (NIST), Federal Risk and Authorization Management Program (FedRAMP), and the General Data Protection Regulation (GDPR)
                                </Card>
                            </Col>
                            <Col className="padding-top-1rem" xs={24} sm={24} md={24} lg={24}>
                                <Card title="Tasks">
                                    Review the available independent audit reports for Microsoft's Cloud services, which provide information about compliance with data protection standards and regulatory requirements, such as International Organization for Standardization (ISO), Service Organization Controls (SOC), National Institute of Standards and Technology (NIST), Federal Risk and Authorization Management Program (FedRAMP), and the General Data Protection Regulation (GDPR)
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <Row className="padding-top-1rem" gutter={16} type="flex">
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Card title="Progress">
                                    Progress
                                </Card>
                            </Col>
                            <Col className="padding-top-1rem" xs={24} sm={24} md={24} lg={24}>
                                <Card title="People working">
                                    <u>
                                        <li>Bablu</li>
                                        <li>Tublu</li>
                                        <li>Panu</li>
                                    </u>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default ProjectManagement;