import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import menuList, { IMenuConfig } from "@/config/menuConfig";
import { useAppSelector } from "@/hooks/store";
import { useMount } from "ahooks";
const SubMenu = Menu.SubMenu;

export default function SideMenu() {
  const { userInfo } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const [menuTreeNode, setMenuTreeNode] = useState<any[]>([]);
  const [openKey, setOpenKey] = useState<string[]>([]);

  // filterMenuItem用来根据配置信息筛选可以显示的菜单项
  const filterMenuItem = (item: IMenuConfig) => {
    const { roles, children, hide } = item;
    if (hide) {
      return false;
    }
    if (
      userInfo?.role === "admin" ||
      !roles ||
      roles.includes(userInfo?.role)
    ) {
      return true;
    } else if (children) {
      // 如果当前用户有此item的某个子item的权限
      return !!children.find((child) => child.roles?.includes(userInfo?.role));
    }
    return false;
  };

  // 菜单渲染
  const getMenuNodes = (menuList: IMenuConfig[]) => {
    // 得到当前请求的路由路径
    return menuList.reduce((pre, item) => {
      if (filterMenuItem(item)) {
        if (!item.children) {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {item.icon || null}
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(
            (cItem) => pathname.indexOf(cItem.path) === 0
          );
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            setOpenKey([...openKey, item.path]);
          }

          // 向pre添加<SubMenu>
          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  {item.icon || null}
                  <span>{item.title}</span>
                </span>
              }
            >
              {getMenuNodes(item.children)}
            </SubMenu>
          );
        }
      }

      return pre;
    }, []);
  };

  useMount(() => {
    const menuTreeNode = getMenuNodes(menuList);
    setMenuTreeNode(menuTreeNode);
  });
  return (
    <div style={{ height: "calc(100% - 70px)" }}>
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        {menuTreeNode.map((item, index) => (
          <Menu
            key={index}
            mode="inline"
            theme="dark"
            selectedKeys={[pathname]}
            defaultOpenKeys={openKey}
          >
            {item}
          </Menu>
        ))}
      </Scrollbars>
    </div>
  );
}
