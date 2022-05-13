import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import routeList, { IRouteItem } from "@/config/routeMap";
import { useAppSelector } from "@/hooks/store";
const { Content } = Layout;

export default function LayoutContent() {
  const { userInfo } = useAppSelector((state) => state.user);
  const location = useLocation();
  const handleFilter = (route: IRouteItem) => {
    // 过滤没有权限的页面
    return userInfo?.role === "admin" || route?.roles?.includes(userInfo?.role);
  };
  return (
    <Content style={{ height: "calc(100% - 100px)", overflowY: "scroll" }}>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="fade"
          exit={false}
        >
          <Switch location={location}>
            <Redirect exact from="/" to="/frequencySafey" />
            {routeList.map((route) => {
              return (
                handleFilter(route) && (
                  <Route
                    component={route.component}
                    key={route.path}
                    path={route.path}
                  />
                )
              );
            })}
            <Redirect to="/error/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
}
