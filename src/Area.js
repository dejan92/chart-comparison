import React, { Component } from 'react';
import Highcharts from 'highcharts';
// import axios from 'axios';

import { HighchartsChart, withHighcharts, XAxis, YAxis, Title, Subtitle, Annotation, Legend, AreaSeries, Tooltip } from 'react-jsx-highcharts';
import addAnnotations from 'highcharts/modules/annotations';
addAnnotations(Highcharts);

// const URL = 'https://www.highcharts.com/samples/data/aapl-c.json';

class Area extends Component {
  constructor(props) {
      super(props);
      this.randomizeData = this.randomizeData.bind(this);
      this.updateComponent = this.updateComponent.bind(this);
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const result = await axios.get(URL);

  //     this.setState({
  //       data: result,
  //       isLoading: false
  //     });
  //   } catch (error) {
  //     this.setState({
  //       error,
  //       isLoading: false
  //     });
  //   }
  // }

  data = [
    [ 1542578284819, 11 ],
    [ 1542664684819, 1.3 ],
    [ 1542751084819, 1.5 ],
    [ 1542837484819, 2.9 ],
    [ 1542923884819, 1.9 ],
    [ 1543010284819, 2.6 ],
    [ 1543096684819, 1.6 ],
    [ 1543183084819, 3 ],
    [ 1543269484819, 4 ],
    [ 1543355884819, 3.6 ],
    [ 1543442284819, 4.5 ],
    [ 1543528684819, 4.2 ],
    [ 1543615084819, 4.5 ],
    [ 1543701484819, 4.5 ],
    [ 1543787884819, 4 ],
    [ 1543874284819, 3.1 ],
    [ 1543960684819, 2.7 ],
    [ 1544047084819, 4 ],
    [ 1544133484819, 2.7 ],
    [ 1544219884819, 2.3 ],
    [ 1544306284819, 2.3 ],
    [ 1544392684819, 4.1 ],
    [ 1544479084819, 7.7 ],
    [ 1544565484819, 7.1 ],
    [ 1544651884819, 5.6 ],
    [ 1544738284819, 6.1 ],
    [ 1544824684819, 5.8 ],
    [ 1544911084819, 8.6 ],
    [ 1544997484819, 7.2 ],
    [ 1545083884819, 9 ],
    [ 1545170284819, 10.9 ],
    [ 1545256684819, 11.5 ],
    [ 1545343084819, 11.6 ],
    [ 1545429484819, 11.1 ],
    [ 1545515884819, 12 ],
    [ 1545602284819, 12.3 ],
    [ 1545688684819, 10.7 ]
  ]
  randomizeData() {
    return this.data.map((arr) => [arr[0], Math.round(Math.random() * 2)]);
  }

  updateComponent() {
    this.forceUpdate();
  }

  render() {
    const plotOptions = {
      area: {
        stacking: 'normal'
      }
    }

    return (
      <div className="app">
        <HighchartsChart plotOptions={ plotOptions }>

          <Title>Network usage</Title>

          <Subtitle>by protocol</Subtitle>

          <Legend />

          <Tooltip valueSuffix=" k"/>

          <XAxis id="myXaxis" type="datetime">
            <XAxis.Title>Unique users</XAxis.Title>
          </XAxis>

          <YAxis id="myYaxis">
            <AreaSeries name="IPv4" data={this.randomizeData()} />
            <AreaSeries name="IPv6" data={this.randomizeData()} />
          </YAxis>

          <Annotation
            labels={ [{ text: "App launch", point: { xAxis: "myXaxis", yAxis: "myYaxis", x: 1545170284819, y: 0 } }] } />
          <Annotation
            labels={ [{ text: "Network outage", point: { xAxis: "myXaxis", yAxis: "myYaxis", x: 1543096684819, y: 0 } }] } />

          <button onClick={this.updateComponent}>Randomize Data</button>
        </HighchartsChart>
      </div>
    );
  }

}

export default withHighcharts(Area, Highcharts);