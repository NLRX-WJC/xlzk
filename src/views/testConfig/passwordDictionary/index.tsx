import DetailModal from "@/components/DetailModal";
import { IPassDict } from "@/interface";
import { dictCreate, dictDel, getDictInfo, getPassDict } from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { useRequest } from "ahooks";
import {
  Button,
  Descriptions,
  Form,
  Input,
  Modal,
  Space,
  Spin,
  Table,
  Typography,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
const { Text } = Typography;
/**
 * 密码字典
 */
export default function PasswordDictionary() {
  const {
    loading,
    run,
    data,
    refresh: refreshPasswordDictionaryList,
  } = useRequest(getPassDict);
  const confirm = useConfirmModal();
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <AddPasswordDictionaryItem onSubmitted={refreshPasswordDictionaryList} />
      <Table
        bordered
        loading={loading}
        dataSource={data?.list ?? []}
        pagination={{
          onChange: (page, limit) => run({ page, limit }),
        }}
        columns={[
          {
            title: "字典名称",
            align: "center",
            dataIndex: "title",
          },
          {
            title: "协议类别",
            align: "center",
            dataIndex: "protocol",
          },
          {
            title: "描述信息",
            align: "center",
            render: (_, { description }) => <Text>{description || "-"}</Text>,
          },
          {
            title: "操作",
            align: "center",
            width: 250,
            render: (_, row) => (
              <>
                <Detail dictInfo={row} />
                <Button
                  type="link"
                  // onClick={this.handleEditUser.bind(null, row)}
                >
                  编辑
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      content: "确定要删除该条密码字典吗？",
                      onOk: () =>
                        execTaskWithTips(() => dictDel({ id: row.id }), {
                          successTip: "删除成功",
                        }).then(refreshPasswordDictionaryList),
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
    </Space>
  );
}

function Detail({ dictInfo }: { dictInfo: IPassDict }) {
  const { loading, data, run } = useRequest(
    () => getDictInfo({ id: dictInfo.id }),
    {
      manual: true,
    }
  );
  return (
    <DetailModal modalProps={{ width: 666 }} onShow={run}>
      <Spin spinning={loading}>
        <Descriptions bordered column={1} labelStyle={{ textAlign: "center" }}>
          <Descriptions.Item label="字典名称" labelStyle={{ width: 120 }}>
            {dictInfo.name}
          </Descriptions.Item>
          <Descriptions.Item label="描述信息">
            {dictInfo.description}
          </Descriptions.Item>
          <Descriptions.Item label="字典内容">
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              style={{ maxHeight: 400, overflowY: "scroll" }}
            />
          </Descriptions.Item>
        </Descriptions>
      </Spin>
    </DetailModal>
  );
}

function AddPasswordDictionaryItem({
  onSubmitted,
}: {
  onSubmitted: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync: add } = useRequest(
    (params) =>
      execTaskWithTips(() => dictCreate(params), { successTip: "添加成功" }),
    {
      manual: true,
    }
  );
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
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
                await add(values);
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
            label="热点名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="BSSID"
            label="BSSID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
