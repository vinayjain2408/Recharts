import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faCircle, faSquare } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons



highchartsMore(Highcharts);
solidGauge(Highcharts);

// function renderIcons(chart) {
//   // Move icon
//   if (!chart.series[0].icon) {
//     chart.series[0].icon = chart.renderer
//       .path(["M", -8, 0, "L", 8, 0, "M", 0, -8, "L", 8, 0, 0, 8])
//       .attr({
//         stroke: "#303030",
//         "stroke-linecap": "round",
//         "stroke-linejoin": "round",
//         "stroke-width": 2,
//         zIndex: 10,
//       })
//       .add(chart.series[2].group);
//   }
//   chart.series[0].icon.translate(
//     chart.chartWidth / 2 - 10,
//     chart.plotHeight / 2 -
//       chart.series[0].points[0].shapeArgs.innerR -
//       (chart.series[0].points[0].shapeArgs.r -
//         chart.series[0].points[0].shapeArgs.innerR) /
//         2
//   );

//   // Exercise icon
//   if (!chart.series[1].icon) {
//     chart.series[1].icon = chart.renderer
//       .path([
//         "M",
//         -8,
//         0,
//         "L",
//         8,
//         0,
//         "M",
//         0,
//         -8,
//         "L",
//         8,
//         0,
//         0,
//         8,
//         "M",
//         8,
//         -8,
//         "L",
//         16,
//         0,
//         8,
//         8,
//       ])
//       .attr({
//         stroke: "#ffffff",
//         "stroke-linecap": "round",
//         "stroke-linejoin": "round",
//         "stroke-width": 2,
//         zIndex: 10,
//       })
//       .add(chart.series[2].group);
//   }
//   chart.series[1].icon.translate(
//     chart.chartWidth / 2 - 10,
//     chart.plotHeight / 2 -
//       chart.series[1].points[0].shapeArgs.innerR -
//       (chart.series[1].points[0].shapeArgs.r -
//         chart.series[1].points[0].shapeArgs.innerR) /
//         2
//   );

//   // Stand icon
//   if (!chart.series[2].icon) {
//     chart.series[2].icon = chart.renderer
//       .path(["M", 0, 8, "L", 0, -8, "M", -8, 0, "L", 0, -8, 8, 0])
//       .attr({
//         stroke: "#303030",
//         "stroke-linecap": "round",
//         "stroke-linejoin": "round",
//         "stroke-width": 2,
//         zIndex: 10,
//       })
//       .add(chart.series[2].group);
//   }

//   chart.series[2].icon.translate(
//     chart.chartWidth / 2 - 10,
//     chart.plotHeight / 2 -
//       chart.series[2].points[0].shapeArgs.innerR -
//       (chart.series[2].points[0].shapeArgs.r -
//         chart.series[2].points[0].shapeArgs.innerR) /
//         2
//   );
// }
function renderIcons() {

  // Move icon
  if (!this.series[0].icon) {
      this.series[0].icon = this.renderer.path(['M', -7, 0, 'L', 7, 0, 'M', 0, -7, 'L', 7, 0, 0, 7])
          .attr({
              stroke: '#303030',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              zIndex: 10
          })
          .add(this.series[0].group);
  }
  this.series[0].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
          (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
  );

  // Exercise icon
  if (!this.series[1].icon) {
      this.series[1].icon = this.renderer.path(
          ['M', -7, 0, 'L', 7, 0, 'M', 0, -7, 'L', 7, 0, 0, 7,
              'M', 7, -7, 'L', 14, 0, 7, 7]
      )
          .attr({
              stroke: '#ffffff',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              zIndex: 10
          })
          .add(this.series[2].group);
  }
  this.series[1].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
          (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
  );

  // Stand icon
  if (!this.series[2].icon) {
      this.series[2].icon = this.renderer.path(['M', 0, 7, 'L', 0, -7, 'M', -7, 0, 'L', 0, -7, 7, 0])
          .attr({
              stroke: '#303030',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': 2,
              zIndex: 10
          })
          .add(this.series[2].group);
  }

  this.series[2].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
          (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
  );
}

const GaugeChart = {
  // ... Your other chart options ...
  chart: {
    type: "solidgauge",
    height: "30%",
    events :{
      render:renderIcons
    }
  },

  title: {
    text: "Activity",
    style: {
      fontSize: "24px",
    },
  },

  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,
    style: {
      fontSize: "12px",
    },
    valueSuffix: "%",
    pointFormat:
      '{series.name}<br><span style="font-size:16px; color: {point.color}; font-weight: bold">{point.y}</span>',
    positioner: function (labelWidth) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: this.chart.plotHeight / 2 + 15,
      };
    },
  },


  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: "90%",
        innerRadius: "90%",
        borderWidth: 0,
        borderColor: "transparent",
      },
      {
        outerRadius: "88%",
        innerRadius: "65%",
        borderWidth: 0,
        borderColor: "transparent",
        events: {
          render: function () {
            renderIcons(this.chart); // Call the renderIcons function
          },
        },
      },
      {
        outerRadius: "63%",
        innerRadius: "40%",
        borderWidth: 0,
        borderColor: "transparent",
        events: {
          render: function () {
            renderIcons(this.chart); // Call the renderIcons function
          },
        },
      },
    ],
  },
  


  //             )
  //             .css({
  //               fontSize: "24px", // Adjust the font size as needed
  //               color: "red", // Adjust the color as needed
  //             })
  //             .add();
  //         },
  //       },
  //     },
  //   ],
  // },


  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: [],
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: true,
      },
      linecap: "round",
      stickyTracking: false,
      rounded: false,
    },
  },

  series: [
    {
      name: "Move",
      type: "solidgauge",
      data: [
        {
          color: "#e6cb00",
          radius: "115%",
          innerRadius: "90%",
          y: 80,
        },
      ],
    },
    {
        name: "Move",
        type: "solidgauge",
        data: [
          {
            color: "red",
            icon:<faArrowUp />,
            radius: "88%",
            innerRadius: "65%",
            y: 75,
          },
        ],
      },
      {
        name: "Move",
        type: "solidgauge",
        data: [
          {
            color: "blue",
            radius: "63%",
            innerRadius: "40%",
            y: 70,
          },
        ],
      },
  ],
  // ... Rest of your chart options ...
};

const Solid = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    // Update the chart when the component mounts
    refContainer.current.chart.reflow();
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"chart"}
        options={GaugeChart}
        ref={refContainer}
      />
    </div>
  );
};

export default Solid;
