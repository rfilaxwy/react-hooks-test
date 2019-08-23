import React, { Component } from 'react'
import axios from 'axios'
import classes from './WeatherContainer.module.css';

require('dotenv').config();

export default class WeatherContainer extends Component{
    constructor(){
        super()
        this.state = {
            weatherCels: null
        }
    }

    componentDidMount(){
        // axios.post('url of the cloudflare worker', {request.body})
        // let weathapi = process.env.WEATHERAPI
        // let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${weathapi}` 
        let localWeather;
        axios.get('/weather').then((res)=>{
            console.log(res)
           localWeather = res.data.weather
           this.setState({
            weather: localWeather
        })
        })
        
    }

           

    render(){
        let weatherDisplay = this.state.weatherCels === null ? 'offline':this.state.weather;
        return(
            <div className={classes.weatherBar}>
                <p>{weatherDisplay}</p>
            </div>
        )
    }
}