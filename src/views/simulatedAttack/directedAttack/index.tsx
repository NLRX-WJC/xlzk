import { CaretRightOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
const { Option } = Select;
export default function DirectedAttack() {
  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <Card>
        <Row>
          <Col>
            <Form
              name="basic"
              layout="inline"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="热点名称"
                name="name"
                rules={[{ required: true, message: "请输入热点名称" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="热点密码" name="password">
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  连接
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
      <Card>
        <Form
          name="basic"
          autoComplete="off"
          wrapperCol={{ span: 5 }}
          labelCol={{ flex: "110px" }}
        >
          <Form.Item
            label="设备地址"
            name="name"
            tooltip="若为三层设备输入IP地址，若为二层设备输入MAC地址"
            rules={[{ required: true, message: "请输入IP地址" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="攻击脚本" name="password">
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              连接
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={10}>
            <Card
              style={{ minHeight: 300 }}
              type="inner"
              title={
                <Typography.Text>
                  <CaretRightOutlined />
                  连接信息
                </Typography.Text>
              }
            >
              Inner Card content
            </Card>
          </Col>
        </Row>
      </Card>
    </Space>
  );
}
