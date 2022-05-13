import echarts from "echarts";
import { useEffect, useRef } from "react";
import "echarts/theme/macarons";

export default function NetworkLoadStatistics() {
  const chartRef = useRef();
  useEffect(() => {
    const chart = echarts.init(chartRef.current, "macarons");
    const option = getChartOption({ timeLine: [], bandwidth: [] });
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
}

function getChartOption({ timeLine, bandwidth }) {
  const option = {
    xAxis: {
      // data: timeLine,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: (value) => {
          return value.split(" ").join("\n");
        },
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    grid: {
      left: 10,
      right: 40,
      bottom: 20,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: "{b}<br/>{c}KB",
      axisPointer: {
        type: "cross",
      },
      padding: [5, 10],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        smooth: true,
        type: "line",
        itemStyle: {
          normal: {
            color: "#3888fa",
            lineStyle: {
              color: "#3888fa",
              width: 2,
            },
            areaStyle: {
              color: "#f3f8ff",
            },
          },
        },
        // data: bandwidth,
        data: [150, 230, 224, 218, 135, 147, 260],
        animationDuration: 1000,
        animationEasing: "quadraticOut",
      },
    ],
  };

  return option;
}
