import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}`;

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
      console.log(latitude);
      console.log(longitude);

      fetch(`${API_URL}${latitude},${longitude}`)
        .then(resp => resp.json())
        .then(forecast => console.log(forecast))
    });
  }

// How do I get my lat and long
  render() {
    const { fetchingData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Weather</h2>
        </header>
        <p className="App-intro">
          {
            fetchingData
            ? <img src={logo} className="App-logo" alt="React Logo" />
            : <h3>Data fetch complete</h3>
          }
        </p>
      </div>
    );
  }
}

export default App;
