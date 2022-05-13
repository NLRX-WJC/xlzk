import { Space } from "antd";
import React from "react";
import DNSConfig from "./DNSConfig";
import NetworkPortManage from "./networkPortManage";
import RouterManage from "./routerManage";

/**
 * 网络管理
 */
export default function NetManage() {
  return (
    <div className="app-container">
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <NetworkPortManage />
        <RouterManage />
        <DNSConfig />
      </Space>
    </div>
  );
}
