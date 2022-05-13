import { Card } from "antd";
import { CardTabListType } from "antd/lib/card";
import React, { useState } from "react";
import SafetyDetect from "./safetyDetect";
import DirectedAttack from "./directedAttack";

const tabs: Record<string, CardTabListType & { component: React.ReactNode }> = {
  SafetyDetect: {
    key: "SafetyDetect",
    tab: "工业协议安全检测",
    component: <SafetyDetect />,
  },
  DirectedAttack: {
    key: "DirectedAttack",
    tab: "工业协议定向攻击",
    component: <DirectedAttack />,
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
