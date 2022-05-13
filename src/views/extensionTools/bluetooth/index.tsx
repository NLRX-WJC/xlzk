import { DeploymentUnitOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import React from "react";
const { Column } = Table;

export default function () {
  return (
    <>
      <Button type="primary" style={{ marginBottom: 16 }}>
        搜索蓝牙设备
      </Button>
      <Table bordered rowKey="id" dataSource={[{}]} pagination={false}>
        <Column title="序号" dataIndex="role" />
        <Column title="设备名称" dataIndex="role" />
        <Column title="设备MAC" dataIndex="role" />
        <Column title="安全风险评估" dataIndex="role" />
        <Column
          title="操作"
          key="action"
          render={(text, row) => (
            <Tooltip title="执行">
              <Button
                type="primary"
                shape="circle"
                icon={<DeploymentUnitOutlined />}
                // onClick={this.handleEditUser.bind(null, row)}
              />
            </Tooltip>
          )}
        />
      </Table>
    </>
  );
}
