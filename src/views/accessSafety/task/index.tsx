import DetailModal from "@/components/DetailModal";
import { Table } from "antd";
const { Column } = Table;

export default function Task() {
  return (
    <Table bordered rowKey="id" dataSource={[{}]} pagination={false}>
      <Column title="任务名称" dataIndex="id" />
      <Column title="描述" dataIndex="id" />
      <Column title="创建时间" dataIndex="name" />
      <Column
        title="操作"
        key="action"
        width={195}
        render={(text, row) => <Detail />}
      />
    </Table>
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
