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
const port = process.env.PORT || 8888;

const weathapi = process.env.WEATHERAPI
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${weathapi}`


app.listen(port, ()=> console.log(`Listening on port ${port}`));

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// })

app.get('/api/weather', (req, res)=>{
   getWeather()
    .then(response => res.status(200).send(response))
   })

const getWeather = async () => {
    let weatherData = await axios.get(weatherUrl);
    let { data } = weatherData;
    return data;
}
