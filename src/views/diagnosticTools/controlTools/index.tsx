import { ctrlDiagnose } from "@/models";
import { CaretRightOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Button, Card, Form, Input, InputNumber, Typography } from "antd";
import { CardTabListType } from "antd/lib/card";
import { useState } from "react";

const tabs: Record<string, CardTabListType> = {
  modbustcp: {
    key: "modbustcp",
    tab: "ModbusTCP链接",
  },
  s7: {
    key: "s7",
    tab: "S7链路",
  },
  ethernet: {
    key: "ethernet",
    tab: "Ethernet/IP链接",
  },
};
export default function TestConfig() {
  const [activeTabKey, setActiveTabKey] = useState(Object.keys(tabs)[0]);
  return (
    <div className="app-container">
      <Card
        style={{ width: "100%" }}
        tabList={Object.values(tabs).map(({ key, tab }) => ({ key, tab }))}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          setActiveTabKey(key);
        }}
      >
        <ControlTool protocol={activeTabKey} />
      </Card>
    </div>
  );
}

function ControlTool({ protocol }: { protocol: string }) {
  const [form] = Form.useForm();
  const { data, run, loading } = useRequest(ctrlDiagnose, {
    manual: true,
  });
  const PROTOCOL_PORT_MAP = {
    modbustcp: 502,
    s7: 102,
    ethernet: 44818,
  };
  form.setFieldsValue({ port: PROTOCOL_PORT_MAP[protocol] });
  return (
    <div style={{ maxWidth: 658, margin: "0 auto" }}>
      <Form
        form={form}
        size="large"
        labelCol={{ span: 3 }}
        labelAlign="left"
        onFinish={(values) => run({ ...values, protocol })}
        autoComplete="off"
        initialValues={{ port: 23 }}
      >
        <Form.Item label="IP" name="ip" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="端口"
          name="port"
          rules={[{ required: true, type: "number", min: 0, max: 65535 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            执行
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
