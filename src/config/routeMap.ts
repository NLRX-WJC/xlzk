import Loadable from "react-loadable";
import Loading from "@/components/Loading";
const FrequencySafey = Loadable({
  loader: () =>
    import(/*webpackChunkName:'frequencySafey'*/ "@/views/frequencySafey"),
  loading: Loading,
});
const TaskList = Loadable({
  loader: () => import(/*webpackChunkName:'taskList'*/ "@/views/taskList"),
  loading: Loading,
});
const TestConfig = Loadable({
  loader: () => import(/*webpackChunkName:'testConfig'*/ "@/views/testConfig"),
  loading: Loading,
});
const CreateTask = Loadable({
  loader: () =>
    import(/*webpackChunkName:'taskList'*/ "@/views/taskList/createTask"),
  loading: Loading,
});
const TaskDetail = Loadable({
  loader: () =>
    import(/*webpackChunkName:'taskList'*/ "@/views/taskList/taskDetail"),
  loading: Loading,
});
const DataCollection = Loadable({
  loader: () =>
    import(/*webpackChunkName:'dataCollection'*/ "@/views/dataCollection"),
  loading: Loading,
});

const SimulatedAttack = Loadable({
  loader: () =>
    import(/*webpackChunkName:'simulatedAttack'*/ "@/views/simulatedAttack"),
  loading: Loading,
});
const AccessSafety = Loadable({
  loader: () =>
    import(/*webpackChunkName:'accessSafety'*/ "@/views/accessSafety"),
  loading: Loading,
});
const TestDataManage = Loadable({
  loader: () =>
    import(/*webpackChunkName:'testDataManage'*/ "@/views/testDataManage"),
  loading: Loading,
});
const ExtensionTools = Loadable({
  loader: () =>
    import(/*webpackChunkName:'extensionTools'*/ "@/views/extensionTools"),
  loading: Loading,
});
const Error404 = Loadable({
  loader: () => import(/*webpackChunkName:'Error404'*/ "@/views/error/404"),
  loading: Loading,
});
const UserManage = Loadable({
  loader: () =>
    import(/*webpackChunkName:'userManage'*/ "@/views/systemManage/userManage"),
  loading: Loading,
});

const NetManage = Loadable({
  loader: () =>
    import(/*webpackChunkName:'netManage'*/ "@/views/systemManage/netManage"),
  loading: Loading,
});

const SystemStatus = Loadable({
  loader: () =>
    import(
      /*webpackChunkName:'systemStatus'*/ "@/views/systemManage/systemStatus"
    ),
  loading: Loading,
});

const NetTools = Loadable({
  loader: () =>
    import(/*webpackChunkName:'netTools'*/ "@/views/diagnosticTools/netTools"),
  loading: Loading,
});

const ControlTools = Loadable({
  loader: () =>
    import(
      /*webpackChunkName:'controlTools'*/ "@/views/diagnosticTools/controlTools"
    ),
  loading: Loading,
});

const Log = Loadable({
  loader: () => import(/*webpackChunkName:'log'*/ "@/views/log"),
  loading: Loading,
});

export interface IRouteItem {
  path: string;
  component: any;
  roles?: string[];
}

const routerList: IRouteItem[] = [
  {
    path: "/frequencySafey",
    component: FrequencySafey,
    roles: ["admin"],
  },
  {
    path: "/testManage/taskList",
    component: TaskList,
    roles: ["admin"],
  },
  {
    path: "/testManage/testConfig",
    component: TestConfig,
    roles: ["admin"],
  },
  {
    path: "/testManage/createTask",
    component: CreateTask,
    roles: ["admin"],
  },
  {
    path: "/testManage/taskDetail",
    component: TaskDetail,
    roles: ["admin"],
  },
  {
    path: "/dataCollection",
    component: DataCollection,
    roles: ["admin"],
  },
  {
    path: "/simulatedAttack",
    component: SimulatedAttack,
    roles: ["admin"],
  },
  {
    path: "/AccessSafety",
    component: AccessSafety,
    roles: ["admin"],
  },
  {
    path: "/testDataManage",
    component: TestDataManage,
    roles: ["admin"],
  },
  {
    path: "/extensionTools",
    component: ExtensionTools,
    roles: ["admin"],
  },

  {
    path: "/systemManage/userManage",
    component: UserManage,
    roles: ["admin"],
  },
  {
    path: "/systemManage/netManage",
    component: NetManage,
    roles: ["admin"],
  },
  {
    path: "/systemManage/systemStatus",
    component: SystemStatus,
    roles: ["admin"],
  },
  {
    path: "/diagnosticTools/netTools",
    component: NetTools,
    roles: ["admin"],
  },
  {
    path: "/diagnosticTools/controlTools",
    component: ControlTools,
    roles: ["admin"],
  },
  {
    path: "/log",
    component: Log,
    roles: ["admin"],
  },
  { path: "/error/404", component: Error404 },
];

export default routerList;
