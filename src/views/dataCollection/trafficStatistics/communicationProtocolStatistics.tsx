import echarts from "echarts";
import { useEffect, useRef } from "react";
import "echarts/theme/macarons";

export default function CommunicationProtocolStatistics() {
  const chartRef = useRef();
  useEffect(() => {
    const chart = echarts.init(chartRef.current, "macarons");
    const option = getChartOption([]);
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);
  return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
}

function getChartOption(chartData) {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    series: [
      {
        type: "pie",
        radius: "70%",
        center: ["50%", "60%"],
        // data: chartData,
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        animationEasing: "cubicInOut",
        animationDuration: 1000,
      },
    ],
  };

  return option;
}
