import { Layout, Button } from "antd";
import "./index.less";
import Hamburger from "./hamburger";
import BreadCrumb from "./breadCrumb";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { userSlice } from "@store/slices/userSlice";
import { removeTokenInCookie } from "@utils/auth";
import { logout } from "@/models";
import { useConfirmModal } from "@hooks/ui";
const { Header } = Layout;

export default function LayoutHeader() {
  const { sidebarCollapsed } = useAppSelector((state) => state.sidebar);
  const { userInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const confirm = useConfirmModal();
  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      <Header />
      <Header
        style={{
          width: sidebarCollapsed ? "calc(100% - 80px)" : "calc(100% - 200px)",
        }}
        className="fix-header"
      >
        <Hamburger />
        <BreadCrumb />
        <div className="right-menu">
          <div className="dropdown-wrap">
            欢迎您，{userInfo?.username}
            <Button
              type="link"
              onClick={() => {
                confirm({
                  title: "注销",
                  content: "确定要退出系统吗?",
                  onOk: () => {
                    logout().then(() => {
                      dispatch(userSlice.actions.setUserInfo(null));
                      dispatch(userSlice.actions.setToken(null));
                      removeTokenInCookie();
                    });
                  },
                });
              }}
            >
              注销
            </Button>
          </div>
        </div>
      </Header>
    </>
  );
}
