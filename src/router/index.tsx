import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "@/views/layout";
import Login from "@/views/login";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { userSlice } from "@store/slices/userSlice";
import { getUserInfo } from "@/models";

export default function Router() {
  const { token, userInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const gUserInfo = async () => {
    const userInfo = await getUserInfo();
    dispatch(userSlice.actions.setUserInfo(userInfo));
  };
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />;
            } else {
              if (userInfo?.role) {
                return <Layout />;
              } else {
                gUserInfo();
              }
            }
          }}
        />
      </Switch>
    </HashRouter>
  );
}
