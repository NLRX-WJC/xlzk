import React from "react";
import { Button, Card, Divider, Table } from "antd";
const { Column } = Table;
import { useHistory } from "react-router-dom";
import { useConfirmModal } from "@hooks/ui";
import { useRequest } from "ahooks";
import { deleteTask, getDeviceInfo, getTaskList, pauseTask } from "@/models";
import { execTaskWithTips } from "@utils/request";
/**
 * 任务列表
 */
export default function TaskList() {
  const history = useHistory();
  const confirm = useConfirmModal();
  const { loading, refresh } = useRequest(getTaskList);
  return (
    <div className="app-container">
      <Card
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: "/testManage/createTask",
              });
            }}
          >
            新建评估任务
          </Button>
        }
      >
        <Table
          bordered
          rowKey="id"
          dataSource={[{}]}
          pagination={false}
          loading={loading}
        >
          <Column title="任务名称" dataIndex="id" align="center" />
          <Column title="创建者" dataIndex="name" align="center" />
          <Column title="创建时间" dataIndex="role" align="center" />
          <Column title="结束时间" dataIndex="role" align="center" />
          <Column title="任务状态" dataIndex="role" align="center" />
          <Column
            title="操作"
            key="action"
            width={250}
            align="center"
            render={(text, row) => (
              <>
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      content: "确定要暂停该条任务吗？",
                      onOk: () =>
                        execTaskWithTips(pauseTask, {
                          successTip: "暂停成功",
                        }).then(refresh),
                    });
                  }}
                >
                  暂停
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    history.push({
                      pathname: "/testManage/taskDetail",
                    });
                  }}
                >
                  详情
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      content: "确定要删除该条任务吗？",
                      onOk: () =>
                        execTaskWithTips(deleteTask, {
                          successTip: "删除成功",
                        }).then(refresh),
                    });
                  }}
                >
                  删除
                </Button>
              </>
            )}
          />
        </Table>
      </Card>
    </div>
  );
}
