import { Card } from "antd";
import { CardTabListType } from "antd/lib/card";
import React, { useState } from "react";
import Task from "./task";
import FrequencySafey from "./frequencySafey";
import { useLocation } from "react-router-dom";

const tabs: Record<string, CardTabListType & { component: React.ReactNode }> = {
  Task: {
    key: "Task",
    tab: "评估任务",
    component: <Task />,
  },
  FrequencySafey: {
    key: "FrequencySafey",
    tab: "频率安全测试",
    component: <FrequencySafey />,
  },
};
export default function DataCollection() {
  const { state } = useLocation<{ tab?: string }>();
  const [activeTabKey, setActiveTabKey] = useState(
    state?.tab ?? Object.keys(tabs)[0]
  );
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
