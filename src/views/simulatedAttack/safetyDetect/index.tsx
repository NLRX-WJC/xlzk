import DetailModal from "@/components/DetailModal";
import { Button, Table } from "antd";
const { Column } = Table;

export default function SafetyDetect() {
  return (
    <Table bordered rowKey="id" dataSource={[{}]} pagination={false}>
      <Column title="时间" dataIndex="id" align="center" />
      <Column title="源IP" dataIndex="id" align="center" />
      <Column title="源MAC" dataIndex="name" align="center" />
      <Column title="目的IP" dataIndex="role" align="center" />
      <Column title="目的MAC" dataIndex="role" align="center" />
      <Column title="源端口" dataIndex="role" align="center" />
      <Column title="目的端口" dataIndex="role" align="center" />
      <Column title="协议" dataIndex="role" align="center" />
      <Column
        title="详细数据"
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
