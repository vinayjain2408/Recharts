import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  exportChart = () => {
    if (this.chartRef.current) {
      this.chartRef.current.chart.exportChart();
    }
  };

  render() {
    const { highcharts, options } = this.props;

    return (
      <div>
        <HighchartsReact
          highcharts={highcharts}
          constructorType={"chart"}
          options={options}
          ref={this.chartRef}
        />
        <button onClick={this.exportChart}>Export</button>
      </div>
    );
  }
}

export default Chart;



