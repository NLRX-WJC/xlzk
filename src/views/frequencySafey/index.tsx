import { Card, Button, Table, Typography, Form, Input, Modal } from "antd";
import DetailModal from "@/components/DetailModal";
import { radioScan, radioScanList, radioScanSave } from "@/models";
import { useRequest } from "ahooks";
import { IRadioScanList } from "@/interface";
import { execTaskWithTips } from "@utils/request";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
const { Column } = Table;
const { Text } = Typography;

const RADIO_DIST_MAP = {
  0: "不干扰",
  1: "轻度干扰",
  2: "中度干扰",
  3: "严重干扰",
};
export default function FrequencySafey() {
  const history = useHistory();
  const { state } = useLocation<{ plan_id: number }>();
  const radioScanRequest = useRequest(radioScan, {
    manual: true,
  });
  const radioScanListRequest = useRequest(radioScanList, {
    manual: true,
  });
  useEffect(() => {
    if (state?.plan_id) {
      radioScanListRequest.run({ plan_id: state?.plan_id });
    }
  }, [state?.plan_id]);

  return (
    <div className="app-container">
      <Card
        title={
          <Button
            type="primary"
            loading={radioScanRequest.loading}
            onClick={async () => {
              await radioScanRequest.runAsync();
              await radioScanListRequest.runAsync({});
            }}
          >
            {radioScanRequest.loading ? "扫描中" : "频率扫描"}
          </Button>
        }
        extra={
          <SaveRadioScan
            disabled={!radioScanListRequest.data?.length}
            onSubmitted={() => {
              history.push({
                pathname: "/accessSafety",
                state: {
                  tab: "FrequencySafey",
                },
              });
            }}
          />
        }
      >
        <Table
          bordered
          dataSource={radioScanListRequest.data ?? []}
          pagination={false}
          loading={radioScanListRequest.loading}
          rowKey={(record, index) => `${index}`}
          columns={[
            {
              title: "序号",
              align: "center",
              dataIndex: "Id",
            },
            {
              title: "热点名称",
              align: "center",
              dataIndex: "ESSID",
              width: 250,
              render: (_, { ESSID }) => <Text>{ESSID || "-"}</Text>,
            },
            {
              title: "频段",
              align: "center",
              dataIndex: "Frequency",
            },
            {
              title: "信道",
              align: "center",
              dataIndex: "Channel",
            },
            {
              title: "信号质量",
              align: "center",
              dataIndex: "Quality",
            },
            {
              title: "信号强度",
              align: "center",
              dataIndex: "Signal level",
            },
            {
              title: "干扰程度",
              align: "center",
              render: (_, { radio_dist }) => (
                <Text>{RADIO_DIST_MAP[radio_dist] ?? radio_dist}</Text>
              ),
            },
            {
              title: "干扰源",
              align: "center",
              width: 200,
              render: (_, row) => <Detail data={row} />,
            },
          ]}
        />
      </Card>
    </div>
  );
}

function Detail({ data }: { data: IRadioScanList }) {
  return (
    <DetailModal modalProps={{ width: 666 }}>
      <Table bordered dataSource={data?.radio_info ?? []} pagination={false}>
        <Column title="热点名称" dataIndex="ESSID" align="center" />
        <Column title="频段" dataIndex="Frequency" align="center" />
        <Column title="信道" dataIndex="Channel" align="center" />
        <Column title="信号质量" dataIndex="Quality" align="center" />
        <Column title="信号强度" dataIndex="Signal level" align="center" />
      </Table>
    </DetailModal>
  );
}

function SaveRadioScan({
  onSubmitted,
  disabled = true,
}: {
  onSubmitted: () => void;
  disabled: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync: save } = useRequest(
    (params: Parameters<typeof radioScanSave>[0]) =>
      execTaskWithTips(() => radioScanSave(params), {
        successTip: "保存成功",
      }),
    {
      manual: true,
    }
  );
  return (
    <>
      <Button
        type="primary"
        disabled={disabled}
        onClick={() => setVisible(true)}
      >
        保存
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
                await save(values);
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
            name="name"
            label="任务名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="des" label="描述">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
