import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./Activity.css"

const Activetity = () => {
  useEffect(() => {
    const renderIcons = () => {
      if (!chart.series[0].icon) {
        chart.series[0].icon = chart.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10
          })
          .add(chart.series[2].group);
      }
      chart.series[0].icon.translate(
        chart.chartWidth / 2 - 10,
        chart.plotHeight / 2 - chart.series[0].points[0].shapeArgs.innerR -
          (chart.series[0].points[0].shapeArgs.r - chart.series[0].points[0].shapeArgs.innerR) / 2
      );

      // Exercise icon
      if (!chart.series[1].icon) {
        chart.series[1].icon = chart.renderer.path(
          ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
            'M', 8, -8, 'L', 16, 0, 8, 8]
        )
          .attr({
            stroke: '#ffffff',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10
          })
          .add(chart.series[2].group);
      }
      chart.series[1].icon.translate(
        chart.chartWidth / 2 - 10,
        chart.plotHeight / 2 - chart.series[1].points[0].shapeArgs.innerR -
          (chart.series[1].points[0].shapeArgs.r - chart.series[1].points[0].shapeArgs.innerR) / 2
      );

      // Stand icon
      if (!chart.series[2].icon) {
        chart.series[2].icon = chart.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10
          })
          .add(chart.series[2].group);
      }

      chart.series[2].icon.translate(
        chart.chartWidth / 2 - 10,
        chart.plotHeight / 2 - chart.series[2].points[0].shapeArgs.innerR -
          (chart.series[2].points[0].shapeArgs.r - chart.series[2].points[0].shapeArgs.innerR) / 2
      );
    };

    const chart = Highcharts.chart('container', {
      chart: {
        type: 'solidgauge',
        height: '110%',
      },
      title: {
        text: 'Activity',
        style: {
          fontSize: '24px',
        },
      },
      tooltip: {
        // Tooltip options...
      },
      // Other chart options...
      series: [
        // Your series data...
      ],
    });

    




    // Attach the renderIcons function to the chart's render event
    chart.options.chart.events = {
      render: renderIcons,
    };

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{} /* Your chart options */}
      />
    </div>
  );
};

export default Activetity;










// import React, { useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import "./Activity.css"

// const MySolidGaugeChart = () => {
//   const renderIcons = () => {
//     if (!this.series[0].icon) {
//       this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
//         .attr({
//           stroke: '#303030',
//           'stroke-linecap': 'round',
//           'stroke-linejoin': 'round',
//           'stroke-width': 2,
//           zIndex: 10
//         })
//         .add(this.series[2].group);
//     }
//     this.series[0].icon.translate(
//       this.chartWidth / 2 - 10,
//       this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
//         (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
//     );

//     // Exercise icon
//     if (!this.series[1].icon) {
//       this.series[1].icon = this.renderer.path(
//         ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
//           'M', 8, -8, 'L', 16, 0, 8, 8]
//       )
//         .attr({
//           stroke: '#ffffff',
//           'stroke-linecap': 'round',
//           'stroke-linejoin': 'round',
//           'stroke-width': 2,
//           zIndex: 10
//         })
//         .add(this.series[2].group);
//     }
//     this.series[1].icon.translate(
//       this.chartWidth / 2 - 10,
//       this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
//         (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
//     );

//     // Stand icon
//     if (!this.series[2].icon) {
//       this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
//         .attr({
//           stroke: '#303030',
//           'stroke-linecap': 'round',
//           'stroke-linejoin': 'round',
//           'stroke-width': 2,
//           zIndex: 10
//         })
//         .add(this.series[2].group);
//     }

//     this.series[2].icon.translate(
//       this.chartWidth / 2 - 10,
//       this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
//         (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
//     );
//   };

//   useEffect(() => {
//     Highcharts.chart('container', {
//       chart: {
//         type: 'solidgauge',
//         height: '110%',
//         events: {
//           render: renderIcons
//         }
//       },
    //   title: {
    //     text: 'Activity',
    //     style: {
    //       fontSize: '24px'
    //     }
    //   },
    //   // Other chart options...
    //   series: [
    //     // Your series data...
    //   ]
    // });

//     // Clean up the chart when the component unmounts
//     return () => {
//       Highcharts.chart('container', null); // Destroy the chart
//     };
//   }, []);

//   return (
//     <div>
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={{} /* Your chart options */}
//       />
//     </div>
//   );
// };

// export default MySolidGaugeChart;
