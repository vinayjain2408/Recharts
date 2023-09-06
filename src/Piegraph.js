import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

// Initialize the required Highcharts modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

// Chart options
const chartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Registered private vehicles in Norway, by type of fuel, 2020',
    align: 'left'
  },
  // ... other chart options
};

const Piegraph = () => {
  useEffect(() => {
    // Create the chart once the component is mounted
    Highcharts.chart('container', chartOptions);
  }, []);

  return (
    <div>
      <div id="container"></div>
      <p className="highcharts-description">
        All color options in Highcharts can be defined as gradients or patterns.
        In this chart, a gradient fill is used for decorative effect in a pie
        chart.
      </p>
    </div>
  );
};

export default Piegraph;




// import React, { useCallback, useState } from "react";
// import { PieChart, Pie, Sector, Cell } from "recharts";

// const data = [
//   { name: '30%', value: 3 },
//   { name: '70% Remaining', value: 7 },
// ];

// const COLORS = ['#0088FE', '#808080']; // Blue for paid bills, white for remaining bills

// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value
//   } = props;

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />

//       <text dy={18} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default function App() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={renderActiveShape}
//         data={data}
//         cx={200}
//         cy={200}
//         innerRadius={60}
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//         onMouseEnter={onPieEnter}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }





// import React from "react";
// import { PieChart, Pie, Legend, Tooltip } from "recharts";

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 350 },

// ];

// const data02 = [
//   { name: "Group A", value: 4400 },
//   { name: "Group B", value: 4567 },

// ];

// export default function App() {
//   return (
//     <PieChart width={1000} height={400}>
//       <Pie
//         dataKey="value"
//         isAnimationActive={false}
//         data={data01}
//         cx={200}
//         cy={200}
//         outerRadius={80}
//         fill="#8884d8"
//         label
//       />
//       <Pie
//         dataKey="value"
//         data={data02}
//         cx={500}
//         cy={200}
//         innerRadius={40}
//         outerRadius={80}
//         fill="#82ca9d"
//       />
//       <Tooltip />
//     </PieChart>
//   );
// }
