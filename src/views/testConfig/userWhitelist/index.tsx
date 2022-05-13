import DetailModal from "@/components/DetailModal";
import {
  getWhitelist,
  getWhitelistInfo,
  whitelistCreate,
  whitelistDel,
} from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { useMount, useRequest } from "ahooks";
import { Button, Form, Input, Modal, Table } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
/**
 * 用户白名单
 */
export default function UserWhitelist() {
  const { loading, refresh, run, data } = useRequest(getWhitelist, {
    manual: true,
  });
  const confirm = useConfirmModal();
  useMount(() => run({ type: 2, page: 1, limit: 10 }));
  return (
    <>
      <AddUserWhitelistItem onSubmitted={refresh} />
      <Table
        loading={loading}
        rowKey={(record, index) => `${index}`}
        dataSource={data?.list ?? []}
        pagination={{
          onChange: (page, limit) => run({ type: 2, page, limit }),
        }}
        columns={[
          {
            title: "序号",
            align: "center",
            dataIndex: "id",
          },
          {
            title: "名称",
            align: "center",
            dataIndex: "name",
          },
          {
            title: "备注",
            align: "center",
            dataIndex: "description",
          },
          {
            title: "操作",
            align: "center",
            width: 250,
            render: (_, { id }) => (
              <>
                <Detail id={id} />
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      content: "确定删除吗？",
                      onOk: () =>
                        execTaskWithTips(() => whitelistDel({ id }), {
                          successTip: "删除成功",
                        }).then(refresh),
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
    </>
  );
}

function Detail({ id }: { id: number }) {
  const { loading, data, run } = useRequest(() => getWhitelistInfo({ id }), {
    manual: true,
  });
  return (
    <DetailModal modalProps={{ width: 666 }} onShow={run} loading={loading}>
      {data}
    </DetailModal>
  );
}

function AddUserWhitelistItem({ onSubmitted }: { onSubmitted: () => void }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync: add } = useRequest(
    (params) =>
      execTaskWithTips(() => whitelistCreate(params), {
        successTip: "添加成功",
      }),
    {
      manual: true,
    }
  );
  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 16, float: "right" }}
        onClick={() => setVisible(true)}
      >
        + 添加
      </Button>
      <Modal
        title="添加"
        visible={visible}
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
                await add({ ...values, type: 2 });
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
        <Form form={form} labelCol={{ span: 4 }}>
          <Form.Item
            name="title"
            label="名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="des" label="描述">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
