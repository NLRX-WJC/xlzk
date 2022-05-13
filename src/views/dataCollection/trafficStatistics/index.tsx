import { Card, Col, Row, Space } from "antd";
import BehaviorStatistics from "./behaviorStatistics";
import CommunicationProtocolStatistics from "./communicationProtocolStatistics";
import HostFlow from "./hostFlow";
import NetworkLoadStatistics from "./networkLoadStatistics";

export default function TrafficStatistics() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="主机流量TOP 10">
            <HostFlow />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="通信协议统计">
            <CommunicationProtocolStatistics />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="行为统计">
            <BehaviorStatistics />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="网络负荷统计">
            <NetworkLoadStatistics />
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
