import { Button, Card, Divider, Table } from "antd";
import React from "react";
const { Column } = Table;

export default function WifiWhitelist() {
  return (
    <>
      <Button type="primary" style={{ marginBottom: 16, float: "right" }}>
        添加
      </Button>
      <Table bordered rowKey="id" dataSource={[]} pagination={false}>
        <Column title="序号" dataIndex="id" key="id" align="center" />
        <Column title="字典名称" dataIndex="id" key="id" align="center" />
        <Column title="创建者" dataIndex="name" key="name" align="center" />
        <Column title="描述信息" dataIndex="role" key="role" align="center" />
        <Column
          title="操作"
          key="action"
          width={195}
          align="center"
          render={(text, row) => (
            <span>
              <Button
                type="primary"
                shape="circle"
                icon="edit"
                title="编辑"
                // onClick={this.handleEditUser.bind(null, row)}
              />
              <Divider type="vertical" />
              <Button
                type="primary"
                shape="circle"
                icon="delete"
                title="删除"
                // onClick={this.handleDeleteUser.bind(null, row)}
              />
            </span>
          )}
        />
      </Table>
    </>
  );
}
