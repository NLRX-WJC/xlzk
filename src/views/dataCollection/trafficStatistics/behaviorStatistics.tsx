import echarts from "echarts";
import { useEffect, useRef } from "react";
import "echarts/theme/macarons";

export default function BehaviorStatistics() {
  const chartRef = useRef();
  useEffect(() => {
    const chart = echarts.init(chartRef.current, "macarons");
    const option = getChartOption({ type: [], data: [] });
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
}

function getChartOption({ type, data }) {
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: "{c}条",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // data: type,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: { alignWithLabel: true },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        type: "bar",
        barWidth: 20, //柱图宽度
        // data: data,
        data: [150, 230, 224, 218, 135, 147, 260],
        animationDuration: 1000,
      },
    ],
  };

  return option;
}
