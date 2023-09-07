import React from "react";
import HighchartsReact from "highcharts-react-official";

function Chart({ highcharts, options }) {
  return (
    <div>
      <HighchartsReact highcharts={highcharts} options={options} />
    </div>
  );
}

export default Chart;











// import React, { useRef } from "react";
// import HighchartsReact from "highcharts-react-official";

// function Chart({ highcharts, options }) {
//   // const chartRef = useRef(null);


//   return (
//     <div>
//       <HighchartsReact
//         highcharts={highcharts}
//         // constructorType={"chart"}
//         options={options}
//         // ref={chartRef}
//       />

//     </div>
//   );
// }

// export default Chart;
