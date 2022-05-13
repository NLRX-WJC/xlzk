import { Card, Table } from "antd";
import { CardTabListType } from "antd/lib/card";
import React, { useState } from "react";
import ProtocolAnalysis from "./protocolAnalysis";
import TrafficStatistics from "./trafficStatistics";
import InterfaceAnalysis from "./interfaceAnalysis";

const tabs: Record<string, CardTabListType & { component: React.ReactNode }> = {
  ProtocolAnalysis: {
    key: "ProtocolAnalysis",
    tab: "工业协议解析",
    component: <ProtocolAnalysis />,
  },
  TrafficStatistics: {
    key: "TrafficStatistics",
    tab: "工业流量统计",
    component: <TrafficStatistics />,
  },
  InterfaceAnalysis: {
    key: "InterfaceAnalysis",
    tab: "无线接口协议解析",
    component: <InterfaceAnalysis />,
  },
};
export default function DataCollection() {
  const [activeTabKey, setActiveTabKey] = useState(Object.keys(tabs)[0]);
  return (
    <div className="app-container">
      <Card
        style={{ width: "100%" }}
        tabList={Object.values(tabs).map(({ key, tab }) => ({ key, tab }))}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          setActiveTabKey(key);
        }}
      >
        {tabs[activeTabKey].component}
      </Card>
    </div>
  );
}
