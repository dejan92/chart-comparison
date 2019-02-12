import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Doughnut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Gases',
        colorByPoint: true,
          data: [{
              name: 'Argon',
              y: 0.9,
              color: '#3498db'
            },
            {
              name: 'Nitrogen',
              y: 78.1,
              color: '#9b59b6'
            },
            {
              name: 'Oxygen',
              y: 20.9,
              color: '#2ecc71',
              sliced: true,
              selected: true
            },
            {
              name: 'Trace Gases',
              y: 0.1,
              color: '#f1c40f'
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
          renderTo: 'atmospheric-composition'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'Earth\'s Atmospheric Composition',
          style: {
            fontSize: '10px',
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              format: '{point.name}: {point.percentage:.1f} %'
            },
            innerSize: '20%',
            showInLegend: true
          }
        },
        series: this.state.series
      });
  }

  render() {
    return (
      <div>
        <div id="atmospheric-composition"></div>
<img className='logo' src='data:image/png;base64,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' alt='sourcico' />
      </div>
    )
  }
}

export default Doughnut;