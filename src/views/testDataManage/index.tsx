import { Button, Table, Space } from "antd";
import DetailModal from "@/components/DetailModal";
import { getDeviceInfo } from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { useRequest } from "ahooks";
const { Column } = Table;

export default function TestDataManage() {
  const { loading, refresh: refreshPasswordDictionaryList } = useRequest(() =>
    Promise.resolve(null)
  );
  const confirm = useConfirmModal();
  return (
    <div className="app-container">
      <Table
        bordered
        rowKey="id"
        dataSource={[{}]}
        pagination={false}
        loading={loading}
      >
        <Column title="任务名称" dataIndex="id" align="center" />
        <Column title="创建者" dataIndex="id" align="center" />
        <Column title="创建时间" dataIndex="name" align="center" />
        <Column title="结束时间" dataIndex="name" align="center" />
        <Column
          title="操作"
          key="action"
          width={250}
          align="center"
          render={(text, row) => (
            <Space>
              <Detail />
              <Button
                type="link"
                // onClick={() => setVisible(true)}
              >
                回放
              </Button>
              <Button
                type="link"
                onClick={() => {
                  confirm({
                    content: "确定要删除该条密码字典吗？",
                    onOk: () =>
                      execTaskWithTips(() => getDeviceInfo(), {
                        successTip: "删除成功",
                      }).then(refreshPasswordDictionaryList),
                  });
                }}
              >
                删除
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

function Detail() {
  return (
    <DetailModal>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </DetailModal>
  );
}
