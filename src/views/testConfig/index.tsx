import { Card } from "antd";
import { CardTabListType } from "antd/lib/card";
import React, { useState } from "react";
import PasswordDictionary from "./passwordDictionary";
import ProtocolList from "./protocolList";
import UserWhitelist from "./userWhitelist";
import WifiWhitelist from "./wifiWhitelist";

const tabs: Record<string, CardTabListType & { component: React.ReactNode }> = {
  PasswordDictionary: {
    key: "PasswordDictionary",
    tab: "密码字典",
    component: <PasswordDictionary />,
  },
  WifiWhitelist: {
    key: "WifiWhitelist",
    tab: "热点白名单",
    component: <WifiWhitelist />,
  },
  UserWhitelist: {
    key: "UserWhitelist",
    tab: "用户白名单",
    component: <UserWhitelist />,
  },
  ProtocolList: {
    key: "ProtocolList",
    tab: "协议列表",
    component: <ProtocolList />,
  },
};
export default function TestConfig() {
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
