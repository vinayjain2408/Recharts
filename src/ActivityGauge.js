import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// require("highcharts/modules/variwide")(Highcharts);
import highchartsGantt from "highcharts/modules/variwide";
highchartsGantt(Highcharts);
const GaugeChart = {
  chart: {
    type: "solidgauge",
    height: "110%",
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
      fontSize: "16px",
    },
    valueSuffix: "%",
    pointFormat:
      '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
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
        outerRadius: "112%",
        innerRadius: "88%",
        backgroundColor: Highcharts.Color(
          Highcharts.getOptions().colors[0]
        )
          .setOpacity(0.3)
          .get(),
        borderWidth: 0,
      },
    ],
  },

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
          radius: "112%",
          innerRadius: "88%",
          y: 80,
        },
      ],
    },
  ],
};

const App = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={GaugeChart} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));






// import React from "react";
// import ReactDom from "react-dom";
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";

// // import Highcharts from 'highcharts'
// // import HighchartsReact from 'highcharts-react-official'

// require("highcharts/modules/variwide")(Highcharts);

// const GaugeChart = {
// chart: {
// type: "solidgauge",
// height: '110%',
// },

// title: {
// text: 'Activity',
// style: {
// fontSize: '24px'
// }
// },

// tooltip: {
// borderWidth: 0,
// backgroundColor: 'none',
// shadow: false,
// style: {
// fontSize: '16px'
// },
// valueSuffix: '%',
// pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
// positioner: function (labelWidth) {
// return {
// x: (this.chart.chartWidth - labelWidth) / 2,
// y: (this.chart.plotHeight / 2) + 15
// };
// }
// },

// pane: {
// startAngle: 0,
// endAngle: 360,
// background: [{ // Track for Move
// outerRadius: '112%',
// innerRadius: '88%',
// backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
// .setOpacity(0.3)
// .get(),
// borderWidth: 0
// }]
// },

// yAxis: {
// min: 0,
// max: 100,
// lineWidth: 0,
// tickPositions: []
// },

// plotOptions: {
// solidgauge: {
// dataLabels: {
// enabled: true
// },
// linecap: 'round',
// stickyTracking: false,
// rounded: false
// }
// },

// series: [{
// name: 'Move',
// type: 'solidgauge',
// data: [{
// color: '#e6cb00',
// radius: '112%',
// innerRadius: '88%',
// y: 80
// }]
// }]
// };


// const App = ()=>{
// return(
// <div>
// <HighchartsReact
// highcharts={Highcharts}
// options={GaugeChart}
// />
// </div>
// )
// }

// ReactDom.render(<App />, document.getElementById("root"));










// import React, { Component } from "react";
// import Chart from "chart.js";

// class ActivityGauge extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     };
//   }

//   render() {
//     const { value } = this.state;
//     const gaugeOptions = {
//       title: "Activity Gauge",
//       range: [0, 100],
//       color: "red",
//     };

//     return (
//       <div>
//         <Chart
//           type="doughnut"
//           data={[
//             {
//               value,
//               color,
//             },
//           ]}
//           options={gaugeOptions}
//         />
//       </div>
//     );
//   }
// }

// export default ActivityGauge;