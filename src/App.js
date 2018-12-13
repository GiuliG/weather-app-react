import React, { Component } from 'react';
import Title from './components/Title';
import Weather from './components/Weather';
import Form from './components/Form'
import './App.css';

const API_KEY = '90a006d0950fbacb825b9edf657b304d';

class App extends Component {

  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_Call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_Call.json();
    if (city && country) {
    console.log(data)
    this.setState ({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: "",
    })
  } else {
    this.setState ({
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: "please fill fields",
    })
  }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
              <Title/>
              <Form getWeather={this.getWeather}/>
              <Weather temperature={this.state.temperature} 
              city={this.state.city} 
              country={this.state.country} 
              description={this.state.description} 
              error={this.state.error} 
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
