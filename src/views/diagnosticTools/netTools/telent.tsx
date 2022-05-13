import { telnet } from "@/models";
import { CaretRightOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Button, Card, Form, Input, InputNumber, Typography } from "antd";

export default function Telent() {
  const [form] = Form.useForm();
  const { data, run, loading } = useRequest(telnet, {
    manual: true,
  });
  return (
    <div style={{ maxWidth: 658, margin: "0 auto" }}>
      <Form
        form={form}
        size="large"
        labelCol={{ span: 3 }}
        labelAlign="left"
        onFinish={run}
        autoComplete="off"
        initialValues={{ port: 23 }}
      >
        <Form.Item label="主机" name="host" rules={[{ required: true }]}>
          <Input placeholder="请输入目标主机名" />
        </Form.Item>
        <Form.Item
          label="端口"
          name="port"
          rules={[{ required: true, type: "number", min: 0, max: 65535 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="命令" name="command" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            执行
          </Button>
          <Button
            htmlType="button"
            style={{ marginLeft: 20 }}
            onClick={() => form.resetFields()}
          >
            重置
          </Button>
        </Form.Item>
      </Form>
      <Card
        style={{ minHeight: 300, marginTop: 20 }}
        type="inner"
        title={
          <Typography.Text>
            <CaretRightOutlined />
            输出信息
          </Typography.Text>
        }
      >
        {loading ? "请稍等，正在努力为您获取执行结果..." : data?.info}
      </Card>
    </div>
  );
}
