import React, { Component } from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

class AreaSplineSmooth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
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
                    data: this.randomData()
                },
                {
                    name: 'Jane',
                    data: this.randomData()
                },
                {
                  name: 'Marta',
                  data: this.randomData()
                },
                {
                  name: 'Dejan',
                  data: this.randomData()
                }]
            }
        }
        this.randomData = this.randomData.bind(this);
        this.getRandomArr = this.getRandomArr.bind(this);
        this.updateValues = this.updateValues.bind(this);
    }

    

    getRandomArr(length, max) {
        return [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    }

    randomData() {
        const randomizedArray = this.getRandomArr(7,10)
        return randomizedArray
    }

    updateValues() {
        console.log('button clicked');
        let options = {...this.state.options}
        options.series = options.series.map(object => object.data = this.randomData())
        this.setState({options})
        this.forceUpdate();
    }

    render() {

        return (<div>
            <HighchartsReact
                highcharts={Highcharts}
                options={this.state.options}
            />
            {/* <button onClick={this.updateValues} >Randomize Data</button> */}
        </div>)
    }
}

export default AreaSplineSmooth;