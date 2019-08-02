const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    massive = require('massive')

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());

let db
const port = process.env.SERVER_PORT;
