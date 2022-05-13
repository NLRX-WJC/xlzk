import {
  DatabaseOutlined,
  LaptopOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React from "react";

export interface IMenuConfig {
  title: string;
  path: string;
  icon?: React.ReactNode;
  roles?: string[];
  hide?: boolean;
  children?: IMenuConfig[];
}
/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList: IMenuConfig[] = [
  {
    title: "频率安全测试",
    path: "/frequencySafey",
    icon: <UnorderedListOutlined />,
    roles: ["admin"],
  },
  {
    title: "测试综合管理",
    path: "/testManage",
    icon: <LaptopOutlined />,
    children: [
      {
        title: "评估任务管理",
        path: "/testManage/taskList",
        roles: ["admin"],
      },
      {
        title: "测试配置管理",
        path: "/testManage/testConfig",
        roles: ["admin"],
      },
    ],
  },
  {
    title: "新建评估任务",
    path: "/testManage/createTask",
    hide: true,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "任务详情",
    path: "/testManage/taskDetail",
    hide: true,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "无线接口数据采集",
    path: "/dataCollection",
    icon: <DatabaseOutlined />,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "系统管理",
    path: "/systemManage",
    icon: <LaptopOutlined />,
    children: [
      {
        title: "用户管理",
        path: "/systemManage/userManage",
        roles: ["admin"],
      },
      {
        title: "网络管理",
        path: "/systemManage/netManage",
        roles: ["admin"],
      },
      {
        title: "系统状态",
        path: "/systemManage/systemStatus",
        roles: ["admin"],
      },
    ],
  },
  {
    title: "无线接口仿真攻击",
    path: "/simulatedAttack",
    icon: <ToolOutlined />,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "接入安全评估",
    path: "/accessSafety",
    icon: <ToolOutlined />,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "测试数据管理",
    path: "/testDataManage",
    icon: <ToolOutlined />,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "扩展工具",
    path: "/extensionTools",
    icon: <ToolOutlined />,
    roles: ["admin", "editor", "guest"],
  },
  {
    title: "诊断工具",
    path: "/diagnosticTools",
    icon: <ToolOutlined />,
    children: [
      {
        title: "网络工具",
        path: "/diagnosticTools/netTools",
        roles: ["admin"],
      },
      {
        title: "控制工具",
        path: "/diagnosticTools/controlTools",
        roles: ["admin"],
      },
    ],
  },
  {
    title: "日志",
    path: "/log",
    icon: <UnorderedListOutlined />,
    roles: ["admin"],
  },
];
export default menuList;
