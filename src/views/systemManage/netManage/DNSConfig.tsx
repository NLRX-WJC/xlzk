import { getDns, setDns } from "@/models";
import { useRequest } from "ahooks";
import { Button, Card, Form, Input, Spin } from "antd";
/**
 * DNS配置
 */
export default function DNSConfig() {
  const { loading, data, refresh } = useRequest(getDns);
  const { loading: submitLoading, runAsync: submit } = useRequest(setDns, {
    manual: true,
  });
  return (
    <Spin tip="加载中..." spinning={loading}>
      <Card title="DNS配置">
        {!loading && data && (
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            size="middle"
            onFinish={(values) => {
              submit(values).then(refresh);
            }}
            initialValues={data}
          >
            <Form.Item
              name="dns1"
              label="首选DNS服务器"
              rules={[{ required: true }]}
            >
              <Input placeholder="首选DNS服务器地址，ipv6地址或者ipv4地址" />
            </Form.Item>
            <Form.Item
              label="备选DNS服务器"
              name="dns2"
              rules={[{ required: true }]}
            >
              <Input placeholder="备选DNS服务器地址，ipv6地址或者ipv4地址" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10 }}>
              <Button type="primary" htmlType="submit" loading={submitLoading}>
                保存
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </Spin>
  );
}
