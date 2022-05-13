import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function PasswordCrack() {
  const onSubmit = (values) => {
    console.log("------values---", values);
  };
  return (
    <Form
      onFinish={onSubmit}
      initialValues={{ username: "admin", password: "111" }}
    >
      <Form.Item
        name="target"
        label="热点名称"
        rules={[{ required: true, message: "请输入评估目标" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码字典"
        name="taskName"
        rules={[{ required: true, message: "请输入任务名称" }]}
      >
        <Select>
          <Option value="male">立即执行</Option>
          <Option value="female">定时执行</Option>
          <Option value="other">每天一次</Option>
          <Option value="other">每周一次</Option>
          <Option value="other">每月一次（按日期）</Option>
          <Option value="other">每月一次（按星期）</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10 }}>
        <Button type="primary" htmlType="submit">
          检测
        </Button>
      </Form.Item>
    </Form>
  );
}
