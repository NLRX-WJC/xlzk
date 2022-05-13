import { deviceInfo, reboot, shutdown } from "@/models";
import { useConfirmModal } from "@hooks/ui";
import { useRequest } from "ahooks";
import { Button, Card, Descriptions, Space, Spin } from "antd";

/**
 * 系统状态
 */
export default function SystemStatus() {
  const { loading, data } = useRequest(deviceInfo);
  const confirm = useConfirmModal();
  return (
    <Spin tip="加载中..." spinning={loading}>
      <div className="app-container">
        <Card>
          <Descriptions
            bordered
            column={1}
            labelStyle={{ textAlign: "center" }}
          >
            <Descriptions.Item label="产品名称(中)">
              {data?.["product.name.cn"] || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="产品名称(英)">
              {data?.["product.name.en"] || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="产品型号">
              {data?.["product.model"] || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="软件版本">
              {data?.["system.version"] || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="固件版本">
              {data?.["firmware.version"] || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="系统操作">
              <Space>
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      title: "重启",
                      content: "确定要重启系统吗?",
                      onOk: reboot,
                    });
                  }}
                >
                  重启系统
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    confirm({
                      title: "关闭",
                      content: "确定要关闭系统吗?",
                      onOk: shutdown,
                    });
                  }}
                >
                  关闭系统
                </Button>
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </Spin>
  );
}
