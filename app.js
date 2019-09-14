const express = require('express');
const getInfoByCountryCode = require('./businessLogic/getInfoByCountryCode.js');
const getAllCountries = require('./businessLogic/getAllCountries.js');


const app = express();

app.get('/', (req, res) => res.sendStatus(200));

app.get('/v1/countries', (req, res) => res.json(getAllCountries()));

app.get('/v1/countries/code/:code', (req, res) => res.json(getInfoByCountryCode(req.params.code)));

module.exports = app;
