import { INetwork } from "@/interface";
import {
  disableNetWork,
  editNetWork,
  enableNetWork,
  networkList,
} from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { useRequest } from "ahooks";
import { Button, Card, Form, Input, Modal, Select, Table } from "antd";
import { useState } from "react";
/**
 * 网口管理
 */
export default function NetworkPortManage() {
  const { loading, data, refresh } = useRequest(networkList);
  const confirm = useConfirmModal();
  return (
    <Card title="网口管理">
      <Table
        bordered
        loading={loading}
        pagination={false}
        rowKey={(record, index) => `${index}`}
        dataSource={data ?? []}
        columns={[
          {
            title: "接口",
            align: "center",
            dataIndex: "interface",
          },
          {
            title: "IPV4地址",
            align: "center",
            dataIndex: "ipv4_ip",
          },
          {
            title: "IPV4子掩码",
            align: "center",
            dataIndex: "ipv4_mask",
          },
          {
            title: "IPV4网关",
            align: "center",
            dataIndex: "ipv4_gw",
          },
          {
            title: "链接速率",
            align: "center",
            dataIndex: "speed",
          },
          {
            title: "网卡模式",
            align: "center",
            render: (_, { mode }) =>
              mode === "half" ? "半双工" : mode === "full" ? "全双工" : "Auto",
          },
          {
            title: "状态",
            align: "center",
            render: (_, { enable }) => (enable === "yes" ? "启用" : "禁用"),
          },
          {
            title: "操作",
            align: "center",
            render: (_, record) =>
              record.interface === "eth3" ? (
                "monitor"
              ) : (
                <>
                  <EditNetwork data={record} onSubmitted={refresh} />
                  {record.interface !== "mgr" ? (
                    <Button
                      type="link"
                      onClick={() => {
                        confirm({
                          title: record.enable === "yes" ? "禁用" : "启用",
                          content: `确定要${
                            record.enable === "yes" ? "禁用" : "启用"
                          }该网口吗?`,
                          onOk: () =>
                            execTaskWithTips(() =>
                              record.enable === "yes"
                                ? disableNetWork({
                                    interface: record.interface,
                                  })
                                : enableNetWork({
                                    interface: record.interface,
                                  })
                            ).then(refresh),
                        });
                      }}
                    >
                      {record.enable === "yes" ? "禁用" : "启用"}
                    </Button>
                  ) : null}
                </>
              ),
          },
        ]}
      />
    </Card>
  );
}

function EditNetwork({
  onSubmitted,
  data,
}: {
  data: INetwork;
  onSubmitted: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync } = useRequest(editNetWork, {
    manual: true,
  });
  form.setFieldsValue(data);
  const modeValue = Form.useWatch("mode", form);
  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        编辑
      </Button>
      <Modal
        title="编辑网口"
        visible={visible}
        width={666}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => {
              form.validateFields().then(async (values) => {
                await runAsync(values);
                form.resetFields();
                setVisible(false);
                onSubmitted();
              });
            }}
          >
            确定
          </Button>,
        ]}
      >
        <Form form={form} labelCol={{ span: 5 }}>
          <Form.Item label="接口名称">{data?.interface}</Form.Item>
          <Form.Item
            name="ipv4_ip"
            label="IPV4地址"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ipv4_mask"
            label="IPV4子网掩码"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ipv4_gw"
            label="IPV4网关"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mode"
            label="网卡模式"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="auto">Auto</Select.Option>
              <Select.Option value="half">半双工</Select.Option>
              <Select.Option value="full">全双工</Select.Option>
            </Select>
          </Form.Item>
          {modeValue !== "auto" ? (
            <Form.Item
              name="speed"
              label="连接速率"
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.mode !== currentValues.mode
              }
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Select.Option value="10">10Mbps</Select.Option>
                <Select.Option value="100">100Mbps</Select.Option>
                <Select.Option value="1000">1000Mbps</Select.Option>
              </Select>
            </Form.Item>
          ) : null}
        </Form>
      </Modal>
    </>
  );
}
