const   express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        app = express(),
        path = require('path'),
        axios = require('axios')
    // massive = require('massive') for later when attach this to a server


require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());


const weathapi = process.env.WEATHERAPI
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${weathapi}`
const port = process.env.PORT || 8888;

app.listen(port);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.get('/weather', (req, res)=>{
    let data;
    axios.get(weatherUrl).then(res=>{
        data = res.data ? res.data.main.temp:null;
    })
    res.send(data)
}).catch(err=> err.send (new Error('Could not find local weather',{status:500})))