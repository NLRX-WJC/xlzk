import { useRequest } from "ahooks";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Spin,
  TimePicker,
} from "antd";
import { useHistory } from "react-router-dom";
const { TextArea } = Input;
/**
 * 新建评估任务
 */

export default function CreateTask() {
  const history = useHistory();

  const { loading, run, data } = useRequest(
    async () => {
      return await Promise.all<{
        List: [];
      }>([]);
    },
    {
      manual: true,
    }
  );
  const onSubmit = (values) => {
    console.log("------values---", values);
  };
  return (
    <Spin size="large" tip="加载中..." spinning={loading}>
      <div className="app-container">
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={14}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              size="middle"
              onFinish={onSubmit}
              initialValues={{ username: "admin", password: "111" }}
            >
              <Form.Item
                name="target"
                label="评估目标（热点名称）"
                rules={[{ required: true, message: "请输入评估目标" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="任务名称"
                name="taskName"
                rules={[{ required: true, message: "请输入任务名称" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="评估内容"
                name="content"
                rules={[{ required: true, message: "请选择评估内容" }]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col
                      span={24}
                      style={{
                        display: "flex",
                        justifyContent: " space-between",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox value="C">未授权热点检测</Checkbox>
                      <Select style={{ width: "50%" }} onChange={() => {}} />
                      <Button
                        type="link"
                        onClick={() =>
                          history.push({
                            pathname: "/policyConfig/wifiWhitelist",
                          })
                        }
                      >
                        热点白名单配置
                      </Button>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        display: "flex",
                        justifyContent: " space-between",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox value="C">未授权用户检测</Checkbox>
                      <Select style={{ width: "50%" }} onChange={() => {}} />
                      <Button
                        type="link"
                        onClick={() =>
                          history.push({
                            pathname: "/policyConfig/userWhitelist",
                          })
                        }
                      >
                        用户白名单配置
                      </Button>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        display: "flex",
                        justifyContent: " space-between",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox style={{ width: 115 }} value="C">
                        弱口令检测
                      </Checkbox>
                      <Select style={{ width: "50%" }} onChange={() => {}} />
                      <Button
                        type="link"
                        onClick={() =>
                          history.push({
                            pathname: "/policyConfig/passwordDictionary",
                          })
                        }
                      >
                        口令字典配置
                      </Button>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox value="C">钓鱼WIFI检测</Checkbox>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox value="C">中间人攻击检测</Checkbox>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      <Checkbox value="C">射频安全检测</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="任务说明">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Spin>
  );
}
