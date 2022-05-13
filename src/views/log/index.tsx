import { USER_MAP } from "@/constant";
import { logs } from "@/models";
import { useRequest } from "ahooks";
import { Button, Collapse, Form, Input, Select, Table, DatePicker } from "antd";
const { Panel } = Collapse;
const { RangePicker } = DatePicker;
/**
 * 日志
 */
const LOG_TYPE_OPTIONS = [
  { label: "所有日志", value: 0 },
  { label: "登录日志", value: 1 },
  { label: "操作日志", value: 2 },
  { label: "升级日志", value: 3 },
  { label: "异常日志", value: 4 },
];
export default function Log() {
  const { loading, run, data, refresh } = useRequest(logs);
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="筛选" key="1">
          <Form layout="inline" onFinish={run}>
            <Form.Item name="date" label="起止时间">
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item name="logType" label="日志类型">
              <Select style={{ width: 200 }}>
                {LOG_TYPE_OPTIONS.map(({ label, value }, index) => (
                  <Select.Option value={value} key={index}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="user" label="用户" wrapperCol={{ span: 5 }}>
              <Select style={{ width: 200 }}>
                {Object.keys(USER_MAP).map((role, index) => (
                  <Select.Option value={role} key={index}>
                    {USER_MAP[role]}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="IP" label="IP">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                查询
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <Table
        bordered
        dataSource={data?.list ?? []}
        pagination={{
          onChange: (page, limit) => run({ page, limit }),
        }}
        loading={loading}
        rowKey={(record, index) => `${index}`}
        columns={[
          {
            title: "日志类型",
            align: "center",
            dataIndex: "type",
          },
          {
            title: "时间",
            align: "center",
            dataIndex: "ctime",
          },
          {
            title: "用户",
            align: "center",
            dataIndex: "username",
          },
          {
            title: "IP",
            align: "center",
            dataIndex: "ip",
          },
          {
            title: "日志详情",
            align: "center",
            dataIndex: "operation_content",
          },
        ]}
      />
    </div>
  );
}
