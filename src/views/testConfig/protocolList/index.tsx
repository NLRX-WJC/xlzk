import { useRequest } from "ahooks";
import { Spin, Table } from "antd";
const { Column } = Table;

/**
 * 协议列表
 */
export default function ProtocolList() {
  // const { loading, data } = useRequest(getProtocolList);
  return (
    <Table bordered rowKey="id" dataSource={[]} pagination={false}>
      <Column title="序号" dataIndex="role" align="center" />
      <Column title="功能码" dataIndex="role" align="center" />
      <Column title="协议" dataIndex="role" align="center" />
      <Column title="端口" dataIndex="role" align="center" />
    </Table>
  );
}
