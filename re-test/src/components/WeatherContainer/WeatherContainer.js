import React, { Component } from "react";
import classes from "./WeatherContainer.module.css";
import axios from "axios";

export default class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCels: null,
      city: ""
    };
  }

  componentDidMount() {
    let localWeather, city;
    axios
      .get("/api/weather")
      .then(res => {
        localWeather = Math.floor(res.data.main.temp - 273);
        city = res.data.name;
        this.setState({
          weatherCels: localWeather,
          city
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let weatherDisplay =
      this.state.weatherCels === null ? "offline" : this.state.weatherCels;
    let city = this.state.city;
    return (
      <div className={classes.weatherBar}>
        <p>
          {weatherDisplay} celsius in {city}
        </p>
      </div>
    );
  }
}
