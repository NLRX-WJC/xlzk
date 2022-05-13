import echarts from "echarts";
import { useEffect, useRef } from "react";
import "echarts/theme/macarons";
export default function HostFlow() {
  const chartRef = useRef();
  useEffect(() => {
    const chart = echarts.init(chartRef.current, "macarons");
    const option = getChartOption({ receive: [], send: [], ipList: [] });
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);
  return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
}

function getChartOption({ receive, send, ipList }) {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: {
      left: "center",
      data: ["收包", "发包"],
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "0",
      containLabel: true,
    },
    yAxis: {
      type: "category",
      // data: ipList,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      inverse: true,
      axisTick: { alignWithLabel: true },
    },
    xAxis: {
      show: false,
      type: "value",
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "收包",
        type: "bar",
        stack: "总量",
        barWidth: 20,
        // data: receive,
        data: [320, 332, 301, 334, 390, 330, 320],
        animationDuration: 1000,
      },
      {
        name: "发包",
        type: "bar",
        stack: "总量",
        barWidth: 20,
        // data: send,
        data: [320, 332, 301, 334, 390, 330, 320],
        animationDuration: 1000,
      },
    ],
  };

  return option;
}
