import React from "react";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { sidebarSlice } from "@store/slices/sidebarSlice";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
export default function Hamburger() {
  const { sidebarCollapsed } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();
  const Icon = sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  return (
    <div
      style={{
        display: "inline-block",
        fontSize: "20px",
        lineHeight: "64px",
        cursor: "pointer",
        marginLeft: "-30px",
      }}
    >
      <Icon
        onClick={() =>
          dispatch(sidebarSlice.actions.setSidebarCollapsed(!sidebarCollapsed))
        }
      />
    </div>
  );
}
