import { getTaskDetail } from "@/models";
import { useRequest } from "ahooks";
import { Card, Col, Descriptions, Row, Space, Spin } from "antd";
import RiskLevel from "./riskLevel";

/**
 * 任务详情
 */
export default function TaskDetail() {
  const { loading, run, data } = useRequest(getTaskDetail);
  return (
    <Spin tip="加载中..." spinning={loading}>
      <div className="app-container">
        <Card>
          <Space direction="vertical" style={{ display: "flex" }}>
            <Row justify="space-between">
              <Col span={12}>
                <Descriptions
                  bordered
                  title="基础信息"
                  column={1}
                  labelStyle={{ textAlign: "center", width: 300 }}
                >
                  <Descriptions.Item label="任务名称">
                    {data?.productNameCn}
                  </Descriptions.Item>
                  <Descriptions.Item label="评估目标">
                    {data?.productNameEn}
                  </Descriptions.Item>
                  <Descriptions.Item label="评估内容">
                    {data?.productModel}
                  </Descriptions.Item>
                  <Descriptions.Item label="执行方式">
                    {data?.systemVersion}
                  </Descriptions.Item>
                  <Descriptions.Item label="执行时间">
                    {data?.firmwareVersion}
                  </Descriptions.Item>
                  <Descriptions.Item label="任务说明作">sdf</Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={10}>
                <RiskLevel />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Descriptions
                  title="评估热点信息"
                  bordered
                  column={2}
                  labelStyle={{ textAlign: "center" }}
                >
                  <Descriptions.Item label="名称">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="MAC">Prepaid</Descriptions.Item>
                  <Descriptions.Item label="频段">YES</Descriptions.Item>
                  <Descriptions.Item label="加密方式">
                    2018-04-24 18:00:00
                  </Descriptions.Item>
                  <Descriptions.Item label="认证方式">
                    2019-04-24 18:00:00
                  </Descriptions.Item>
                  <Descriptions.Item label="信道">
                    2019-04-24 18:00:00
                  </Descriptions.Item>
                  <Descriptions.Item label="波特率">$80.00</Descriptions.Item>
                  <Descriptions.Item label="信号质量">$20.00</Descriptions.Item>
                  <Descriptions.Item label="信号强度">$60.00</Descriptions.Item>
                  <Descriptions.Item label="组播加密">$60.00</Descriptions.Item>
                  <Descriptions.Item label="IE" span={2}>
                    $60.00
                  </Descriptions.Item>
                  <Descriptions.Item label="接入设备" span={2}>
                    $60.00
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Space>
        </Card>
      </div>
    </Spin>
  );
}
