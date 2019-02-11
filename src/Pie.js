import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Pie extends Component {

  constructor(props) {
    super(props);

    this.state = {
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
  }
}

  componentDidMount() {
    this.highChartsRender();
  }

  highChartsRender() {
    Highcharts.chart({
        chart: {
          type: 'pie',
          renderTo: 'browser-market-share'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'Browser market share in January 2019',
          style: {
            fontSize: '15px',
          }
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
        series: this.state.series
      });
  }

  render() {
    return (
      <div id="browser-market-share">
  	</div>
    )
  }
}

export default Pie;