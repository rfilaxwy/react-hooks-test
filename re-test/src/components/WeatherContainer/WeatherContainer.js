import React, { Component } from 'react'
import axios from 'axios'
import classes from './WeatherContainer.module.css';

require('dotenv').config();

export default class WeatherContainer extends Component{
    constructor(props){
        super(props)
        this.state ={
            weatherCels: null
        }
    }

    // state = {
    //     weatherCels: null
    // }

    // static getDerivedStateFromProps(props, state){
    //     return state;
    // }

    componentDidMount(){
        // axios.post('url of the cloudflare worker', {request.body})
        let localWeather;
        axios.get('/api/weather').then((res)=>{
            localWeather = Math.floor(res.data.main.temp - 273)
            this.setState({
            weatherCels: localWeather
        })
        }) 
    }

 
           

    render(){
        let weatherDisplay = this.state.weatherCels === null ? 'offline':this.state.weatherCels;
        return(
            <div className={classes.weatherBar}>
                <p>{weatherDisplay} celsius</p>
            </div>
        )
    }
}