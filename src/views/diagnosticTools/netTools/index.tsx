import { Card } from "antd";
import { useState } from "react";
import Ping from "./ping";
import Ssh from "./ssh";
import Telent from "./telent";
import TraceRoute from "./traceRoute";
/**
 * 网络工具
 */
const tabs = [
  {
    key: "ping",
    tab: "Ping联通测试",
    component: <Ping />,
  },
  {
    key: "telent",
    tab: "Telnet链接测试",
    component: <Telent />,
  },
  {
    key: "ssh",
    tab: "SSH链接测试",
    component: <Ssh />,
  },
  {
    key: "traceRoute",
    tab: "TraceRoute",
    component: <TraceRoute />,
  },
];
export default function SystemStatus() {
  const [activeTabKey, setActiveTabKey] = useState("ping");
  return (
    <div className="app-container">
      <Card
        style={{ width: "100%", minHeight: 500 }}
        tabList={tabs.map(({ key, tab }) => ({ key, tab }))}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          setActiveTabKey(key);
        }}
      >
        {tabs.find(({ key }) => key === activeTabKey)["component"]}
      </Card>
    </div>
  );
}
