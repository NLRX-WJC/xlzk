import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "@/styles/index.less";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import store from "./store";
import Router from "./router";
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
