import echarts from "echarts";
import { useEffect, useRef } from "react";
import "echarts/theme/macarons";

export default function RiskLevel() {
  const chartRef = useRef();
  useEffect(() => {
    const chart = echarts.init(chartRef.current, "macarons");
    const option = getChartOption([]);
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

function getChartOption(chartData) {
  const option = {
    tooltip: {
      formatter: "{b} : {c}",
    },
    series: [
      {
        type: "gauge",
        min: 1,
        max: 5,

        splitNumber: 4,
        radius: "80%",
        detail: {
          fontSize: 30,
          formatter: function (value) {
            switch (value) {
              case 5:
                return "非常危险";
              case 4:
                return "危险";
              case 3:
                return "存在风险";
              case 2:
                return "需要关注";
              default:
                return "安全";
            }
          },
          color: "#444343", // color: 'auto'
        },
        data: [
          {
            value: 1,
            name: "风险等级",
          },
        ],
        title: {
          fontWeight: "bolder",
          fontSize: 20,
          color: "#666",
        },
        // 分割线
        axisTick: {
          show: false,
        },
        // 刻度线
        splitLine: {
          show: false,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLine: {
          lineStyle: {
            width: 18,
            color: [
              [0.25, "#4ccb96"],
              [0.5, "#ffff00"],
              //[0.5, '#fcfe92'],
              [0.75, "#ffc107"],
              [1, "#ff0000"],
            ],
            // color: [
            //   [
            //     1,
            //     new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            //       {
            //         offset: 0,
            //         color: "#4ccb96",
            //       },
            //       {
            //         offset: 0.25,
            //         color: "#ffff00",
            //       },
            //       {
            //         offset: 0.5,
            //         color: "#ffc107",
            //       },
            //       {
            //         offset: 0.75,
            //         color: "#ffc107",
            //       },
            //       {
            //         offset: 1,
            //         color: "#ff0000",
            //       },
            //     ]),
            //   ],
            // ],
          },
        },
        animationDuration: 1000,
      },
    ],
  };

  return option;
}
