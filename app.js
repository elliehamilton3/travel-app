const express = require('express');
const getInfoByCountryCode = require('./businessLogic/getInfoByCountryCode.js');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/countries/:code', (req, res) => res.json(getInfoByCountryCode(req.params.code)));

module.exports = app;
