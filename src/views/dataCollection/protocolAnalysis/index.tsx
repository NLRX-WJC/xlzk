import { Table } from "antd";
const { Column } = Table;

export default function ProtocolAnalysis() {
  return (
    <Table bordered rowKey="id" dataSource={[]} pagination={false}>
      <Column title="源IP" dataIndex="id" key="id" align="center" />
      <Column title="源MAC" dataIndex="name" align="center" />
      <Column title="目的IP" dataIndex="role" align="center" />
      <Column title="目的MAC" dataIndex="role" align="center" />
      <Column title="源端口" dataIndex="role" align="center" />
      <Column title="目的端口" dataIndex="role" align="center" />
      <Column title="协议" dataIndex="role" align="center" />
      <Column title="功能码" dataIndex="role" align="center" />
    </Table>
  );
}
