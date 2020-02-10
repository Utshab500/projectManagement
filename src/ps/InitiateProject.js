import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../index.css';
import '../custome.css';

import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { DatePicker } from 'antd';


const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

class InitiateProject extends React.Component {

    onChange = (value) => {
        console.log(`selected ${value}`);
    }
    
    onBlur = () => {
        console.log('blur');
    }
    
    onFocus = () => {
        console.log('focus');
    }
    
    onSearch = (val) => {
        console.log('search:', val);
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
      }

    render() {
        return (
            <Content className="container">
                <Row gutter={16} type="flex">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Title level={3}>Initialize Project</Title>
                        <hr />
                    </Col>
                </Row>
                <Row className="padding-top-2rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        Project Name
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <Input placeholder="Basic usage" />
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        Project Details
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <TextArea rows={2} />
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        Instructions
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <TextArea rows={5} />
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        Start Date
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <div>
                            <DatePicker className="fit-width" onChange={this.onChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        End Date
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <div>
                            <DatePicker className="fit-width" onChange={this.onChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        Assign to
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <Select
                            showSearch
                            className = "fit-width"
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>
                <Row className="padding-top-1rem" gutter={16} type="flex">
                    <Col xs={24} sm={12} md={6} lg={6}></Col>
                    <Col xs={24} sm={12} md={18} lg={18}>
                        <Row className="padding-top-1rem" gutter={16} type="flex">
                            <Col xs={12} sm={12} md={4} lg={3}>
                                <Button type="primary">Primary</Button>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={3}>
                                <Button type="danger">Cancel</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default InitiateProject;