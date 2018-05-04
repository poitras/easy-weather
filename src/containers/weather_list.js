import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/charts'

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('city data', cityData);
    
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td>
          <Chart data={temps} color='orange' />
        </td>
        <td>
          <Chart data={pressures} color='blue' />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.props.weather)}
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) { // instead of state
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)


