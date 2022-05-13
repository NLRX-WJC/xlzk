import { Button, Modal, ModalProps, Spin } from "antd";
import { useEffect, useState } from "react";

const DetailModal: React.FC<{
  modalTitle?: string;
  modalProps?: ModalProps;
  onShow?: () => void;
  loading?: boolean;
}> = ({
  modalTitle = "详情",
  modalProps = {},
  onShow = () => {},
  loading = false,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    visible && onShow();
  }, [visible]);
  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        查看
      </Button>
      <Modal
        title={modalTitle}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="cancel" type="primary" onClick={() => setVisible(false)}>
            关闭
          </Button>,
        ]}
        {...modalProps}
      >
        <Spin spinning={loading}>{children}</Spin>
      </Modal>
    </>
  );
};
export default DetailModal;
