import {
  INetwork,
  IRouter,
  IDNS,
  IDeviceInfo,
  IRadioScanList,
  IRadioTask,
  IUser,
  ILog,
  IPassDict,
  IWhiteList,
} from "@/interface";
import { apiRequest } from "@utils/request";

export async function getDeviceInfo(): Promise<IDeviceInfo> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 3000);
  });
}

export async function getTaskList(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({}), 1000);
  });
}

export async function deleteTask(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({}), 1000);
  });
}

export async function pauseTask(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({}), 1000);
  });
}

export async function getTaskDetail(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({}), 1000);
  });
}

// +=======================================================================
export async function radioScan(): Promise<any> {
  return await apiRequest({
    action: "radioScan",
  });
}
/**
 * 获取频率扫描结果
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48010160&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function radioScanList(params: {
  plan_id?: number;
}): Promise<IRadioScanList[]> {
  return await apiRequest({
    action: "radioScanList",
    method: "GET",
    params,
  });
}
/**
 * 密码字典列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48010864&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getPassDict(params: {
  page: number;
  limit: number;
}): Promise<{ list: IPassDict[]; total: number }> {
  return await apiRequest({
    action: "getPassDict",
    method: "GET",
    params,
  });
}

/**
 * 密码字典详情
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48010869&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getDictInfo(params: { id: number }): Promise<any> {
  return await apiRequest({
    action: "getDictInfo",
    params,
  });
}

/**
 * 射频安全任务列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48010850&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function radioTasks(params: {
  page: number;
  limit: number;
}): Promise<{
  list: IRadioTask[];
  total: number;
}> {
  return await apiRequest({
    action: "radioTasks",
    method: "GET",
    params,
  });
}

/**
 * 频率扫描任务结果保存
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48010847&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function radioScanSave(params: {
  name: string;
  des: string;
}): Promise<any> {
  return await apiRequest({
    action: "radioScanSave",
    params,
  });
}

/**
 * 用户登录
 * https://www.eolink.com/share/project/api/detail?groupID=1785529&apiID=48012041&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function login(params: {
  username: string;
  password: string;
}): Promise<any> {
  return await apiRequest({
    action: "login",
    params,
  });
}

/**
 * 获取白名单列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785922&apiID=48010851&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getWhitelist(params: {
  type: number; //1:无线热点，2：用户白名单
  page: number;
  limit: number;
}): Promise<{ list: IWhiteList[]; total: number }> {
  return await apiRequest({
    action: "getWhitelist",
    params,
  });
}

/**
 * 获取白名单列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785922&apiID=48010851&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function whitelistCreate(params: {
  type: number;
  title: string;
  des: string;
  content: string;
}): Promise<any> {
  return await apiRequest({
    action: "whitelistCreate",
    params,
  });
}

/**
 * 查看白名单详情
 * https://www.eolink.com/share/project/api/detail?groupID=1785922&apiID=48010853&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getWhitelistInfo(params: { id: number }): Promise<any> {
  return await apiRequest({
    action: "getWhitelistInfo",
    params,
  });
}

/**
 * 白名单删除
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010859&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function whitelistDel(params: { id: number }): Promise<any> {
  return await apiRequest({
    action: "whitelistDel",
    params,
  });
}

/**
 * 新增密码字典
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010870&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function dictCreate(params: {
  timeStamp: string;
  title: string;
  content: string;
  des: string;
  protocol: string;
}): Promise<any> {
  return await apiRequest({
    action: "dictCreate",
    params,
  });
}

/**
 * 编辑密码字典
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010872&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function dictEdit(params: {
  timeStamp: string;
  title: string;
  content: string;
  des: string;
  protocol: string;
}): Promise<any> {
  return await apiRequest({
    action: "dictEdit",
    params,
  });
}

/**
 * 删除密码字典
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010874&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function dictDel(params: { id: number }): Promise<any> {
  return await apiRequest({
    action: "dictDel",
    params,
  });
}

/**
 * ping
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48012951&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function ping(params: {
  target: string;
  count?: string;
  timeout?: string;
}): Promise<{ info: string; lostPackage: string; time: string }> {
  return await apiRequest({
    action: "tools/ping",
    params,
  });
}

/**
 * traceRoute
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48013438&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function traceRoute(params: { target: string }): Promise<any> {
  return await apiRequest({
    action: "tools/traceroute",
    params,
  });
}

/**
 * SSH
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48013437&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function ssh(params: {
  host: string;
  port: number;
  username: string;
  password: string;
  command?: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "tools/ssh",
    params,
  });
}

/**
 * Telnet
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48013378&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function telnet(params: {
  host: string;
  port: number;
  username: string;
  password: string;
  command?: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "tools/telnet",
    params,
  });
}

/**
 * 控制器诊断
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48013691&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function ctrlDiagnose(params: {
  ip: string;
  port: number;
  protocol: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "tools/ctrlDiagnose",
    params,
  });
}

/**
 * 获取热点名称列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010880&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getApSSID(params: {
  frequency: number;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "getApSSID",
    method: "GET",
    params,
  });
}

/**
 * 停止用户连接扫描
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011024&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function stopUserScan(): Promise<{ info: string }> {
  return await apiRequest({
    action: "stopUserScan",
    method: "GET",
  });
}

/**
 * 断开WiFi热点连接
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011026&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function disconnectWifi(): Promise<{ info: string }> {
  return await apiRequest({
    action: "disconnectWifi",
  });
}

/**
 * WiFi热点连接
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011025&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function connectWifi(params: {
  name: string;
  pwd: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "connectWifi",
    params,
  });
}

/**
 * 开始连接用户扫描
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011023&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function startUserScan(params: {
  duration: number;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "startUserScan",
    method: "GET",
    params,
  });
}

/**
 * 停止无线扫描
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011020&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function stopWifiScan(): Promise<{ info: string }> {
  return await apiRequest({
    action: "stopWifiScan",
    method: "GET",
  });
}

/**
 * 获取无线扫描结果
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010893&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getWifi(params: {
  id?: number;
  type?: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "getWifi",
    method: "GET",
    params,
  });
}

/**
 * 启动热点扫描
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48010895&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function startWifiScan(params: {
  frequency: number;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "startWifiScan",
    method: "GET",
    params,
  });
}

/**
 * 网口列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011062&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function networkList(): Promise<INetwork[]> {
  return await apiRequest({
    action: "networkList",
    method: "GET",
  });
}

/**
 * 编辑网口
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011066&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function editNetWork(params: {
  interface: string;
  enable: string;
  default_ipv4_gw: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "editNetWork",
    params,
  });
}

/**
 * 启用网口
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011068&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function enableNetWork(params: {
  interface: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "enableNetWork",
    params,
  });
}

/**
 * 网口禁用
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011080&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function disableNetWork(params: {
  interface: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "disableNetWork",
    params,
  });
}

/**
 * 路由列表
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011082&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function routerList(): Promise<IRouter[]> {
  return await apiRequest({
    action: "routerList",
    method: "GET",
  });
}

/**
 * 添加路由
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011092&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function createRouter(params: {
  iface: string;
  ip: string;
  mask: string;
  gw: string;
  metric: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "createRouter",
    params: {
      ...params,
      IPType: "ipv4",
    },
  });
}

/**
 * 更新路由
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011094&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function updateRouter(params: {
  iface: string;
  ip: string;
  mask: string;
  gw: string;
  metric: string;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "updateRouter",
    params: {
      ...params,
      IPType: "ipv4",
    },
  });
}

/**
 * 删除路由
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011104&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function deleteRouter(params: {
  id: number;
}): Promise<{ info: string }> {
  return await apiRequest({
    action: "deleteRouter",
    params,
  });
}

/**
 * 设备信息
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011104&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function deviceInfo(): Promise<IDeviceInfo> {
  return await apiRequest({
    action: "deviceInfo",
    method: "GET",
  });
}

/**
 * 系统重启
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011055&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function reboot(): Promise<any> {
  return await apiRequest({
    action: "reboot",
    method: "GET",
  });
}

/**
 * 强制重启
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011056&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function forceReboot(): Promise<any> {
  return await apiRequest({
    action: "forceReboot",
    method: "GET",
  });
}

/**
 * 系统关机
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011058&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function shutdown(): Promise<any> {
  return await apiRequest({
    action: "shutdown",
    method: "GET",
  });
}

/**
 * 强制系统关机
 * https://www.eolink.com/share/project/api/detail?groupID=1785944&apiID=48011059&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function forceShutdown(): Promise<any> {
  return await apiRequest({
    action: "forceShutdown",
    method: "GET",
  });
}

/**
 * 禁用用户状态
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012426&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function disableUser(params: { username: string }): Promise<any> {
  return await apiRequest({
    action: "disableUser",
    params,
  });
}

/**
 * 启用用户状态
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012411&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function enableUser(params: { username: string }): Promise<any> {
  return await apiRequest({
    action: "enableUser",
    params,
  });
}
/**
 * 编辑用户
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012405&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function editUser(params: {
  username: string;
  password: string;
}): Promise<any> {
  return await apiRequest({
    action: "editUser",
    params,
  });
}
/**
 * 新增用户
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012394&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function createUser(params: { username: string }): Promise<any> {
  return await apiRequest({
    action: "createUser",
    params,
  });
}
/**
 * 删除用户
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012375&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function deleteUser(params: { username: string }): Promise<any> {
  return await apiRequest({
    action: "deleteUser",
    params,
  });
}

/**
 * 用户列表
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012369&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function userList(): Promise<{ list: IUser[] }> {
  return await apiRequest({
    action: "userList",
  });
}

/**
 * 用户信息
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012063&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getUserInfo(): Promise<IUser> {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve({
        username: "admin",
        is_system: "1",
        accounts_status: 0,
        role: "admin",
        realname: "难凉热血",
      })
    );
  });
  return await apiRequest({
    action: "userInfo",
    method: "GET",
  });
}

/**
 * 用户退出
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012053&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function logout(): Promise<any> {
  return await apiRequest({
    action: "logout",
    method: "GET",
  });
}

// /**
//  * 用户登录
//  * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48012041&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
//  */
// export async function login(params: {
//   username: string;
//   password: string;
// }): Promise<any> {
//   return await apiRequest({
//     action: "login",
//     params,
//   });
// }

/**
 * DNS配置
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48011105&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function getDns(): Promise<IDNS> {
  return await apiRequest({
    action: "dns",
    method: "GET",
  });
}

export async function setDns(params: {
  dns1: string;
  dns2: string;
}): Promise<any> {
  return await apiRequest({
    action: "dns",
    params,
  });
}

/**
 * DNS配置
 * https://www.eolink.com/share/project/api/detail?groupID=1786096&apiID=48011105&shareCode=GFWhnr&shareToken=$2y$10$xgQ4vJyG3IcYhkUlzSdS2O4~2Ffh6vHaDfkMhRrWWBVGrOrOmI1jDUS&shareID=374538
 */
export async function logs(params: {
  page: number;
  limit: number;
}): Promise<{ list: ILog[]; total: number }> {
  return await apiRequest({
    action: "logs",
    params,
  });
}
