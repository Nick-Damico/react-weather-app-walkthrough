import React from 'react';
import moment from 'moment';

function tempRound(temp) {
  return Math.round(temp);
}

const CurrentForecast = ({forecast: { apparentTemperature, humidity, precipProbability, summary, temperature, time }}) =>
  <div className="currentforecast__div">
    <h2>Current Forecast</h2>
    <div className="currentforecast__div--inner" style={{border: 'solid 1px black', padding: 16, margin: 16}}>
      <h3>{summary}</h3>
      <p>Time of Forecast: { moment.unix(time).format('LT') }</p>
      <p>Temperature: { tempRound(temperature) }</p>
      <p>Feels Like: { tempRound(apparentTemperature) }</p>
      <p>Humidity: {humidity}</p>
      <p>Chance of Percip: {precipProbability}%</p>
    </div>
  </div>

export default CurrentForecast;
