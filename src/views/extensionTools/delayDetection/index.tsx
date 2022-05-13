import { CaretRightOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import React from "react";
const { Column } = Table;
const { Option } = Select;
export default function DelayDetection() {
  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <Card>
        <Row>
          <Col>
            <Form
              name="basic"
              layout="inline"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="热点名称"
                name="name"
                rules={[{ required: true, message: "请输入热点名称" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="热点密码" name="password">
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  连接
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
      <Card>
        <Form name="basic" autoComplete="off">
          <Row>
            <Col span={10}>
              <Form.Item
                label="IP"
                name="name"
                rules={[{ required: true, message: "请输入IP地址" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col span={5}>
              <Form.Item label="发包长度" name="password">
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="发包个数" name="password">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  style={{ width: 100 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              连接
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={10}>
            <Card
              style={{ minHeight: 300 }}
              type="inner"
              title={
                <Typography.Text>
                  <CaretRightOutlined />
                  连接信息
                </Typography.Text>
              }
            >
              Inner Card content
            </Card>
          </Col>
        </Row>
      </Card>
    </Space>
  );
}
