import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal, ModalFuncProps } from "antd";
const { confirm } = Modal;

export function useConfirmModal() {
  return ({ title = "确定此操作？", ...rest }: ModalFuncProps) => {
    // return new Promise((resolve, reject) => {
    //   confirm({
    //     title,
    //     icon: <ExclamationCircleOutlined />,
    //     onOk() {
    //       onOk();
    //       resolve(true);
    //     },
    //     onCancel() {
    //       resolve(false);
    //     },
    //     ...rest,
    //   });
    // });
    confirm({
      title,
      icon: <ExclamationCircleOutlined />,
      ...rest,
    });
  };
}
