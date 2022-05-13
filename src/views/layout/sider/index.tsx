import React from "react";
import { Layout } from "antd";
import { useAppSelector } from "@/hooks/store";
import Logo from "./logo";
import Menu from "./menu";
const { Sider } = Layout;

export default function LayoutSider() {
  const { sidebarCollapsed } = useAppSelector((state) => state.sidebar);
  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      trigger={null}
      style={{ zIndex: "10" }}
    >
      <Logo />
      <Menu />
    </Sider>
  );
}
