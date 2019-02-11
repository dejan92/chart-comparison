import React from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
      type: 'areaspline'
  },
  title: {
      text: 'Average fruit consumption during one week'
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 50,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
  },
  xAxis: {
      categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
      ]
  },
  yAxis: {
      title: {
          text: 'Fruit units'
      }
  },
  tooltip: {
      shared: true,
      valueSuffix: ' units'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: 'John',
      data: [3, 4, 3, 5, 4, 10, 12]
  }, {
      name: 'Jane',
      data: [1, 3, 4, 3, 3, 5, 4]
  },
  {
    name: 'Marta',
    data: [6, 3, 7, 5, 1, 9, 2]
  },
  {
    name: 'Dejan',
    data: [9, 7, 3, 8, 4, 7, 6]
  }]
}

const AreaTest = () => (<HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />)


export default AreaTest;