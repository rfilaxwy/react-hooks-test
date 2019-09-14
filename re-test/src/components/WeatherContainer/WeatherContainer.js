import React, { Component } from 'react'
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

    // componentDidMount(){
    //     // axios.post('url of the cloudflare worker', {request.body})
    //     let localWeather;
    //     axios.get('/api/weather').then((res)=>{
    //         localWeather = Math.floor(res.data.main.temp - 273)
    //         this.setState({
    //         weatherCels: localWeather
    //     })
    //     }) 
    // }

    componentDidMount(){
        let localWeather;
        fetch('/api/weather')
            .then(data => {return data.json()})
            .then(res => { 
                localWeather = Math.floor(res.main.temp - 273)
                this.setState({weatherCels: localWeather})
             })
             .catch((err)=>{
             console.log(err);   
             this.setState({weatherCels: 'unknown'})
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