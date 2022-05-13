import { IRouter } from "@/interface";
import { createRouter, deleteRouter, routerList, updateRouter } from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { useRequest } from "ahooks";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Table,
} from "antd";
import { useState } from "react";
const { Option } = Select;
/**
 * 路由管理
 */
export default function RouterManage() {
  const { loading, data, refresh } = useRequest(routerList);
  const confirm = useConfirmModal();
  return (
    <Card
      title="路由管理"
      extra={<EditOrCreateRouter opterateType="create" onSubmitted={refresh} />}
    >
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
            dataIndex: "iface",
          },
          {
            title: "目的IP地址",
            align: "center",
            dataIndex: "ip",
          },
          {
            title: "掩码/前缀",
            align: "center",
            dataIndex: "mask",
          },
          {
            title: "网关",
            align: "center",
            dataIndex: "gw",
          },
          {
            title: "优先级",
            align: "center",
            dataIndex: "metric",
          },
          {
            title: "操作",
            align: "center",
            render: (_, record) =>
              record.isDefault ? (
                "monitor"
              ) : (
                <>
                  <EditOrCreateRouter
                    opterateType="edit"
                    data={record}
                    onSubmitted={refresh}
                  />
                  <Button
                    type="link"
                    onClick={() => {
                      confirm({
                        title: "删除",
                        content: `确定要删除该网口吗?`,
                        onOk: () =>
                          execTaskWithTips(() =>
                            deleteRouter({
                              id: record.id,
                            })
                          ).then(refresh),
                      });
                    }}
                  >
                    删除
                  </Button>
                </>
              ),
          },
        ]}
      />
    </Card>
  );
}

function EditOrCreateRouter({
  opterateType,
  onSubmitted,
  data,
}: {
  data?: IRouter;
  opterateType: "edit" | "create";
  onSubmitted: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync } = useRequest(
    opterateType === "edit" ? updateRouter : createRouter,
    {
      manual: true,
    }
  );
  if (opterateType === "edit") {
    form.setFieldsValue(data);
  }
  return (
    <>
      {opterateType === "edit" ? (
        <Button type="link" onClick={() => setVisible(true)}>
          编辑
        </Button>
      ) : (
        <Button
          type="primary"
          style={{ marginBottom: 16, float: "right" }}
          onClick={() => setVisible(true)}
        >
          添加
        </Button>
      )}

      <Modal
        title={opterateType === "edit" ? "编辑路由" : "添加路由"}
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
                await runAsync({ ...values, id: data?.id });
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
          <Form.Item
            name="ip"
            label="目的IPV4地址"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mask"
            label="掩码"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gw"
            label="网关地址"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="metric"
            label="优先级"
            rules={[{ required: true, type: "number", min: 1, max: 9999 }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="iface"
            label="接口"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Option value="eth1">eth1</Option>
              <Option value="eth2">eth2</Option>
              <Option value="eth3">eth3</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
