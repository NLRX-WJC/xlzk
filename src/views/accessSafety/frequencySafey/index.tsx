import DetailModal from "@/components/DetailModal";
import { radioScanList, radioTasks } from "@/models";
import { useAntdTable, useRequest } from "ahooks";
import { Button, Descriptions, Spin, Table, Typography } from "antd";
import { useHistory } from "react-router-dom";
const { Text } = Typography;

export default function () {
  const { tableProps } = useAntdTable(async ({ current, pageSize }) => {
    return await radioTasks({ page: current, limit: pageSize });
  });
  const history = useHistory();
  return (
    <Table
      rowKey={(record, index) => `${index}`}
      columns={[
        {
          title: "任务ID",
          align: "center",
          dataIndex: "plan_id",
        },
        {
          title: "任务名称",
          align: "center",
          dataIndex: "name",
        },
        {
          title: "描述",
          align: "center",
          dataIndex: "description",
          render: (_, { description }) => <Text>{description || "-"}</Text>,
        },
        {
          title: "创建时间",
          align: "center",
          dataIndex: "create_time",
        },
        {
          title: "操作",
          align: "center",
          render: (_, { plan_id }) => (
            <Button
              type="primary"
              onClick={() =>
                history.push({
                  pathname: "/frequencySafey",
                  state: {
                    plan_id,
                  },
                })
              }
            >
              查看
            </Button>
          ),
        },
      ]}
      {...tableProps}
    />
  );
}

function Detail({ planId }: { planId: number }) {
  const { loading, data, run } = useRequest(
    () => radioScanList({ plan_id: planId }),
    { manual: true }
  );
  console.log("-----data----", data);
  return (
    <DetailModal modalProps={{ width: 666 }} onShow={run}>
      <Spin spinning={loading}>
        <Descriptions bordered column={1} labelStyle={{ textAlign: "center" }}>
          <Descriptions.Item label="热点名称">字典名称</Descriptions.Item>
          <Descriptions.Item label="频段">描述</Descriptions.Item>
          <Descriptions.Item label="信号质量">描述</Descriptions.Item>
          <Descriptions.Item label="信号强度">描述</Descriptions.Item>
        </Descriptions>
      </Spin>
    </DetailModal>
  );
}
