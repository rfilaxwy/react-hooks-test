import React, { Component } from 'react'
import axios from 'axios'

require('dotenv').config();

export default class WeatherContainer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        // axios.post('url of the cloudflare worker', {request.body})
        let weathapi = process.env.WEATHERAPI
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${weathapi}` 
        axios.get(weatherUrl).then((res)=>{
            console.log(res)

        })
    }
        //api.openweathermap.org/data/2.5/weather?q=London
           

    render(){
        return(
            <div>

            </div>
        )
    }
}