import { Card, Table } from "antd";
import { CardTabListType } from "antd/lib/card";
import React, { useState } from "react";
import DelayDetection from "./delayDetection";
import Bluetooth from "./bluetooth";
import ZigBee from "./ZigBee";
import RFID from "./RFID";

const tabs: Record<string, CardTabListType & { component: React.ReactNode }> = {
  DelayDetection: {
    key: "DelayDetection",
    tab: "无线网络延迟检测",
    component: <DelayDetection />,
  },
  Bluetooth: {
    key: "Bluetooth",
    tab: "蓝牙",
    component: <Bluetooth />,
  },
  ZigBee: {
    key: "ZigBee",
    tab: "ZigBee",
    component: <ZigBee />,
  },
  RFID: {
    key: "RFID",
    tab: "RFID",
    // eslint-disable-next-line react/jsx-pascal-case
    component: <RFID />,
  },
};
export default function ExtensionTools() {
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
