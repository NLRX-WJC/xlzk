import DetailModal from "@/components/DetailModal";
import { radioScan } from "@/models";
import { useRequest } from "ahooks";
import { Button, Table } from "antd";
import { useState } from "react";
const { Column } = Table;

export default function ProtocolAnalysis() {
  const { data, run, cancel, loading } = useRequest(radioScan, {
    pollingInterval: 1000,
    manual: true,
  });
  const [scanLoading, setScanLoading] = useState(false);
  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        loading={scanLoading}
        onClick={() => {
          setScanLoading(true);
          run();
        }}
      >
        {scanLoading ? "扫描中" : "开始扫描"}
      </Button>
      <Table bordered dataSource={[{}]} pagination={false}>
        <Column title="热点名称" dataIndex="id" align="center" />
        <Column title="热点MAC" dataIndex="name" align="center" />
        <Column title="WIFI频段" dataIndex="role" align="center" />
        <Column title="加密方式" dataIndex="role" align="center" />
        <Column title="认证方式" dataIndex="role" align="center" />
        <Column
          title="热点连接设备"
          dataIndex="role"
          align="center"
          render={(text, row) => <Detail />}
        />
        <Column
          title="详情"
          dataIndex="role"
          align="center"
          render={(text, row) => <Detail />}
        />
        <Column title="操作" dataIndex="role" align="center" />
      </Table>
    </>
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
