import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentForecast from './components/CurrentForecast';

import fetchJsonp from 'fetch-jsonp';
import './App.css';

const API_URL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      fetchingData: true,
      weatherData: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude} = pos.coords;

      fetchJsonp(`${API_URL}${latitude},${longitude}`)
        .then(resp => resp.json())
        .then(weatherData => {
          this.setState({
            weatherData: weatherData,
            fetchingData: false
          })
        })
    });
  }

// How do I get my lat and long
  render() {
    const { fetchingData, weatherData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Weather</h2>
        </header>
        <div className="App-intro">
          {
            fetchingData
            ? <img src={logo} className="App-logo" alt="React Logo" />
            : <CurrentForecast forecast={weatherData.currently} />
          }
        </div>
      </div>
    );
  }
}

export default App;
