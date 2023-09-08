import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge";


highchartsMore(Highcharts);
solidGauge(Highcharts);

function renderIcons() {
  // Move icon
  if (!this.series[0].icon) {
    this.series[0].icon = this.renderer
      .path(["M", -7, 0, "L", 7, 0, "M", 0, -7, "L", 7, 0, 0, 7])
      .attr({
        stroke: "#303030",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": 3,
        zIndex: 10,
      })
      .add(this.series[0].group);
  }
  this.series[0].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 -
      this.series[0].points[0].shapeArgs.innerR -
      (this.series[0].points[0].shapeArgs.r -
        this.series[0].points[0].shapeArgs.innerR) /
        2
  );

}

const GaugeChart = {
  chart: {
    type: "solidgauge",
    height: "30%",
    events: {
      render: renderIcons,
    },
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
        outerRadius: "112%",
        innerRadius: "88%",
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
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
        enabled: false,
      },
      linecap: "round",
      stickyTracking: false,
      rounded: true,
    },
  },



  series: [{
    name: 'Move',
    data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '112%',
        innerRadius: '88%',
        y: 30
    }]
}]

};

const Solid = () => {
  const refContainer = useRef(null);

  useEffect(() => {
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
