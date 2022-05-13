import { useState } from "react";
import {
  Card,
  Button,
  Table,
  Form,
  Input,
  Modal,
  Select,
  Typography,
} from "antd";
import { useRequest } from "ahooks";
import { createUser, deleteUser, editUser, userList } from "@/models";
import { IUser } from "@/interface";
import { useConfirmModal } from "@hooks/ui";
import { execTaskWithTips } from "@utils/request";
import { USER_MAP } from "@/constant";
const { Option } = Select;
const { Text } = Typography;

export default function UserManage() {
  const { loading, data, refresh } = useRequest(userList);
  const confirm = useConfirmModal();
  return (
    <div className="app-container">
      <Card
        title={<EditOrCreateUser opterateType="create" onSubmitted={refresh} />}
      >
        <Table
          bordered
          loading={loading}
          dataSource={data?.list ?? []}
          pagination={false}
          columns={[
            {
              title: "账号",
              align: "center",
              dataIndex: "username",
            },
            {
              title: "姓名",
              align: "center",
              dataIndex: "realname",
            },
            {
              title: "角色",
              align: "center",
              render: (_, { role }) => <Text>{USER_MAP[role]}</Text>,
            },
            {
              title: "系统用户",
              align: "center",
              render: (_, { is_system }) => (
                <Text>{is_system ? "是" : "否"}</Text>
              ),
            },
            {
              title: "用户状态",
              align: "center",
              render: (_, { accounts_status }) => (
                <Text>
                  {accounts_status === 0
                    ? "启用"
                    : accounts_status === 1
                    ? "锁定"
                    : "禁用"}
                </Text>
              ),
            },
            {
              title: "操作",
              align: "center",
              width: 250,
              render: (_, record) => (
                <>
                  <EditOrCreateUser
                    opterateType="edit"
                    onSubmitted={refresh}
                    data={record}
                  />
                  <Button
                    type="link"
                    onClick={() => {
                      confirm({
                        title: "删除",
                        content: `确定要删除该网口吗?`,
                        onOk: () =>
                          execTaskWithTips(() =>
                            deleteUser({
                              username: record.username,
                            })
                          ).then(refresh),
                      });
                    }}
                  >
                    删除
                  </Button>
                </>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
}

function EditOrCreateUser({
  opterateType,
  onSubmitted,
  data,
}: {
  data?: IUser;
  opterateType: "edit" | "create";
  onSubmitted: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { loading, runAsync } = useRequest(
    opterateType === "edit" ? editUser : createUser,
    {
      manual: true,
    }
  );
  if (opterateType === "edit") {
    form.setFieldsValue(data);
  }
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        {opterateType === "edit" ? "编辑" : "添加用户"}
      </Button>
      <Modal
        title={opterateType === "edit" ? "编辑用户" : "添加用户"}
        visible={visible}
        width={666}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => {
              form.validateFields().then(async (values) => {
                await runAsync(values);
                form.resetFields();
                setVisible(false);
                onSubmitted();
              });
            }}
          >
            确定
          </Button>,
        ]}
      >
        <Form form={form} labelCol={{ span: 5 }}>
          <Form.Item
            name="username"
            label="账号"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="realname"
            label="姓名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              {Object.keys(USER_MAP).map((role, index) => (
                <Option value={role} key={index}>
                  {USER_MAP[role]}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
