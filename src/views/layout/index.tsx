import React from "react";
import Content from "./content";
import Header from "./header";
import Sider from "./sider";
import { Layout } from "antd";

export default function Main() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
}
