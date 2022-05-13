import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, message, Spin, Input } from "antd";
import "./index.less";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { userSlice } from "@store/slices/userSlice";
import { setTokenToCookie } from "@utils/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login, getUserInfo } from "@/models";
import { execTaskWithTips } from "@utils/request";
import { useRequest } from "ahooks";

export default function Login() {
  const [form] = Form.useForm();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { loading, runAsync: reqLogin } = useRequest(
    (params: Parameters<typeof login>[0]) =>
      execTaskWithTips(() => login(params), {
        successTip: "登录成功",
      }),
    {
      manual: true,
    }
  );

  const handleLogin = async ({ username, password }) => {
    const { token } = await reqLogin({ username, password });
    setTokenToCookie(token);
    const userInfo = await getUserInfo();
    dispatch(userSlice.actions.setUserInfo(userInfo));
    dispatch(userSlice.actions.setToken(token));
  };
  return token ? (
    <Redirect to="/" />
  ) : (
    <div className="login-container">
      <Form
        className="content"
        onFinish={handleLogin}
        form={form}
        initialValues={{ username: "admin", password: "123123" }}
      >
        <div className="title">
          <h2>工业无线网络安全检测工具</h2>
        </div>
        <Spin spinning={loading} tip="登录中...">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Spin>
      </Form>
    </div>
  );
}
