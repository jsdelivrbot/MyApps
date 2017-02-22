import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {

renderWeather(cityData){
  const name = cityData.city.name;
  const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp- 273);
  const humidity = cityData.list.map(weather => weather.main.humidity);
  const pressure = cityData.list.map(weather => weather.main.pressure);
  const lon = cityData.city.coord.lon;
  const lat = cityData.city.coord.lat;

  console.log(temps);
  console.log(humidity);
  console.log(pressure);
  return (
    <tr key = {name}>
    <td><GoogleMap lon = {lon} lat = {lat}/></td>
    <td><Chart data = {temps} color = "orange" units = "C"/> </td>
    <td><Chart data = {humidity} color = "green" units = "hPa" /></td>
    <td><Chart data = {pressure} color = "blue" units = "%"/></td>
    </tr>
  );
}


render(){
return (

<table className = "table table-hover">
<thead>
 <tr>
  <th>City</th>
  <th>Temparature (C)</th>
  <th>Pressure (hPa)</th>
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


function mapStateToProps({weather}){
  return { weather };
}


export default connect(mapStateToProps)(WeatherList);
