import axios, { Method } from "axios";
import store from "@/store";
import { message, notification, Modal } from "antd";
import { getTokenFromCookie, removeTokenInCookie } from "./auth";
import { userSlice } from "@store/slices/userSlice";
import { logout } from "@/models";
const { confirm } = Modal;
interface IApiRequestParam {
  action: string;
  params?: any;
  method?: Method;
  version?: string;
}

const request = axios.create();

// 请求拦截器
request.interceptors.request.use((config) => {
  if (store.getState().user.token) {
    config.headers.Authorization = getTokenFromCookie();
  }
  return config;
}, Promise.reject);

// 响应拦截器
request.interceptors.response.use(
  ({ data = {}, status }) => {
    if (data.result) {
      return data?.detail ?? {};
    } else {
      throw {
        code: status,
        message: data?.errorInfo,
      };
    }
  },
  (error) => {
    throw {
      code: error.response?.status,
      message: error.response?.data?.errorInfo,
    };
  }
);

export async function apiRequest({
  action,
  method = "POST",
  version = "v1",
  params = {},
}: IApiRequestParam): Promise<any> {
  try {
    return await request({
      url: `/api/${version}/${action}`,
      method,
      data: params,
    });
  } catch (error) {
    if (error?.code === 403) {
      confirm({
        title: "登录超时",
        content:
          "由于长时间未操作，您已被登出，可以取消继续留在该页面，或者重新登录",
        okText: "重新登录",
        onOk() {
          logout().then(() => {
            store.dispatch(userSlice.actions.setUserInfo(null));
            store.dispatch(userSlice.actions.setToken(null));
            removeTokenInCookie();
          });
        },
      });
    } else {
      notification.error({
        message: `接口 ${action} 请求异常`,
        description: `[${error?.code}] ${error?.message}`,
      });
    }

    throw error;
  }
}

export interface ILoadingOptions {
  successTip?: string;
  failTip?: string;
}

/**
 * 执行异步任务，显示 tips
 */
export const execTaskWithTips = async <T>(
  task: (...args: any[]) => Promise<T>,
  options: ILoadingOptions = {}
): Promise<T> => {
  const { successTip = "操作成功", failTip = "操作失败，请重试！" } = options;
  try {
    const res = await task();
    successTip ? message.success(successTip) : null;
    return res;
  } catch (e) {
    failTip ? message.error(failTip) : null;
    throw e;
  }
};
