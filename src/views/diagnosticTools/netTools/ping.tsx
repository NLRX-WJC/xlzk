import { ping } from "@/models";
import { CaretRightOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Button, Card, Form, Input, Typography } from "antd";

export default function Ping() {
  const { data, run, loading } = useRequest(ping, {
    manual: true,
  });
  return (
    <div style={{ maxWidth: 658, margin: "0 auto" }}>
      <Form
        size="large"
        layout="inline"
        onFinish={run}
        autoComplete="off"
        style={{ flexWrap: "nowrap" }}
      >
        <Form.Item
          name="target"
          style={{ width: "88%" }}
          rules={[{ required: true, message: "请输入目标主机名" }]}
        >
          <Input placeholder="请输入目标主机名" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Ping
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
        {loading ? (
          "请稍等，正在努力为您获取执行结果..."
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data?.info }} />
        )}
      </Card>
    </div>
  );
}
