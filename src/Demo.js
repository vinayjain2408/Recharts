import React from "react";
import Highcharts from "highcharts";
import Chart from "./component/Chart.js"; // Adjust the import path

const gaugeOptions = {
  chart: {
    type: "gauge",
  },
  title: {
    text: "Activity Gauge",
  },
  yAxis: {
    min: 0,
    max: 100,
  },
  series: [
    {
      name: "Activity",
      data: [50], // Initial value
    },
  ],
};

function Dome() {
  return (
    <div>
      <h2>Highcharts</h2>
      <Chart options={gaugeOptions} highcharts={Highcharts} />
    </div>
  );
}

export default Dome;








// import React from "react";
// // import { render } from "react-dom";
// // Import Highcharts
// import Highcharts from "highcharts";

// // Import our demo components
// import Chart from "./component/Chart.js"; // Adjust the import path

// // Load Highcharts modules
// // require("highcharts/modules/exporting")(Highcharts);


// // const { value } = this.state;
// const gaugeOptions = {
//   title: "Activity Gauge",
//   range: [0, 100],
//   color: "red",
// };


// // const chartOptions = {
// //   title: {
// //     text: ""
// //   },
// //   series: [
// //     {
// //       data: [[1, "Highcharts"], [1, "React"], [3, "Highsoft"]],
// //       keys: ["y", "name"],
// //       type: "pie"
// //     }
// //   ]
// // };

// // Define the `dome` function
// function dome() {


//   return(
//     <div>
//    <h2>Highcharts</h2>
//     <Chart options={gaugeOptions} highcharts={Highcharts} />
//   </div>
//   )

// }

// export default dome;
