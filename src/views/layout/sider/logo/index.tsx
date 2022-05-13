import React from "react";
import logo from "@/assets/images/logo.svg";
import "./index.less";
export default function Logo() {
  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h1 className="sidebar-title">工业无线网络安全检测工具</h1>
    </div>
  );
}
