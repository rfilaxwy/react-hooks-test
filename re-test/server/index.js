const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express()
    // massive = require('massive') for later when attach this to a server

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());


let weathapi = process.env.WEATHERAPI
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${weathapi}`

app.get('/weather', weatherUrl).then((res) =>{
    res.send(res)
}).catch(err=> err.send (new Error('Could not find local weather',{status:500})))