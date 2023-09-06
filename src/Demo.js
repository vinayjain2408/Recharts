import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";

// Import our demo components
import Chart from "./component/Chart.js"; // Adjust the import path

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  title: {
    text: ""
  },
  series: [
    {
      data: [[1, "Highcharts"], [1, "React"], [3, "Highsoft"]],
      keys: ["y", "name"],
      type: "pie"
    }
  ]
};

// Define the `dome` function
function dome() {
  // Render app with demo chart
  const App = () => (
    <div>
      <h1>Demos</h1>

      <h2>Highcharts</h2>
      <Chart options={chartOptions} highcharts={Highcharts} />
    </div>
  );

  render(<App />, document.getElementById("root"));
}

export default dome;
