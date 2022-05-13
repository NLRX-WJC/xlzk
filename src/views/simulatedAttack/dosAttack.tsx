import {
  Typography,
  Alert,
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
} from "antd";
import React from "react";
const { Option } = Select;
export default function DosAttack() {
  const onSubmit = (values) => {
    console.log("------values---", values);
  };
  const [form] = Form.useForm();
  console.log("------isMac---", form.getFieldValue("isMac"));
  return (
    <>
      <Alert
        style={{ marginBottom: 20 }}
        message="说明：拒绝服务攻击根据不同AP点能力效果不同"
        type="info"
      />
      <Form
        form={form}
        labelCol={{ span: 4 }}
        onFinish={onSubmit}
        initialValues={{ username: "admin", password: "111" }}
      >
        <Form.Item label="指定AP MAC">
          <Form.Item
            name="isMac"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Switch />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.isMac !== currentValues.isMac
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("isMac") ? (
                <Form.Item
                  name="mac"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    marginLeft: 20,
                    width: "50%",
                  }}
                >
                  <Input placeholder="请输入指定的MAC地址" />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </Form.Item>
        <Form.Item name="target" label="使用有效MAC">
          <Switch />
        </Form.Item>
        <Form.Item label="智能攻击">
          <Space size={20}>
            <Form.Item name="username" noStyle rules={[{ required: true }]}>
              <Switch />
            </Form.Item>
            <Typography.Text>攻击时保持AP和客户端连接</Typography.Text>
          </Space>
        </Form.Item>
        <Form.Item label="指定发包速率">
          <Form.Item
            name="speed"
            rules={[{ required: true }]}
            style={{ display: "inline-block" }}
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              marginLeft: 20,
              width: "50%",
            }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10 }}>
          <Button type="primary" htmlType="submit">
            检测
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
