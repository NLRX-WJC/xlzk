export interface INetwork {
  interface: string;
  ipv4_ip: string;
  ipv4_mask: string;
  ipv4_gw: string;
  speed: string;
  mode: string;
  enable: string;
}

export interface IRouter {
  id: number;
  iface: string;
  ip: string;
  mask: string;
  gw: string;
  metric: string;
  isDefault: boolean;
}

export interface IDNS {
  dns1: string;
  dns2: string;
}

export interface IDeviceInfo {
  "firmware.version": string;
  lang: string;
  "plugins.count": number;
  "product.model": string;
  "product.name.cn": string;
  "product.name.en": string;
  "product.serial.num": string;
  "rules.count": number;
  "system.version": string;
}

export interface IRadioScanList {
  "Pairwise Ciphers (2)": string;
  radio_dist: number;
  BSSID: string;
  Extra: string;
  IE: string;
  "Bit Rates": string;
  "Signal level": string;
  signal_bar: number;
  radio_info: IRadioInfo[];
  Frequency: string;
  encryption_method: string;
  ESSID: string;
  passwd_check: {
    status: number;
    password: string;
  };
  "Authentication Suites (1)": string;
  Hidden: number;
  "Group Cipher": string;
  Quality: string;
  Id: string;
  Channel: string;
  Mode: string;
}

export interface IRadioInfo {
  "Pairwise Ciphers (1)": string;
  BSSID: string;
  Extra: string;
  "Bit Rates": string;
  "Signal level": string;
  Channel: string;
  Id: string;
  signal_bar: number;
  Frequency: string;
  encryption_method: string;
  ESSID: string;
  passwd_check: {
    status: number;
    password: string;
  };
  "Authentication Suites (1)": string;
  Hidden: number;
  IE: string;
  Quality: string;
  "Group Cipher": string;
  Mode: string;
}

export interface IRadioTask {
  create_time: string;
  description: string;
  file_name: string;
  name: string;
  plan_id: number;
}

export interface IUser {
  username: string;
  realname: string;
  role: string;
  is_system: string;
  accounts_status: number;
}

export interface ILog {
  type: string;
  ctime: string;
  username: string;
  ip: string;
  operation_content: number;
}

export interface IPassDict {
  admin_id: number;
  description: string;
  name: string;
  protocol: string;
  title: string;
  id: number;
}

export interface IWhiteList {
  description: string;
  file_name: string;
  id: number;
  name: string;
  type: number;
}
