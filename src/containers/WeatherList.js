import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart1 from '../components/Chart';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Area } from "react-charts";
import GoogleMap from '../components/GoogleMap';

export class WeatherList extends Component {
  renderWeather(cityData) {
    const celsiusDiff = 273.15;
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => Math.round(weather.main.temp - celsiusDiff));
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    const chartTemp = cityData.list.map((weather, index) => {
      var celsiousTemp = Math.round(weather.main.temp - celsiusDiff);
      return {
        r: 10,
        x: new Date(weather.dt_txt),
        y: celsiousTemp
      };
    });

    console.log(cityData);
    return (
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart
            data={[{
              label: "Temperature",
              datums: chartTemp
            }]}>
            <Axis primary type="time" position="bottom" />
            <Axis type="linear" position="left" stacked />
            <Series type={Line} />
            <Tooltip />
          </Chart>
        </td>
        {/* <td><Chart1 data={temps} color="red" units="C"/></td> */}
        <td><Chart1 data={humidities} color="blue" units="hPa"/></td>
        <td><Chart1 data={pressures} color="green" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Presure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);


