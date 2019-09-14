const express = require('express');

const getAllCountries = require('./businessLogic/getAllCountries.js');
const getInfoByCountryCode = require('./businessLogic/getInfoByCountryCode.js');
const getInfoByName = require('./businessLogic/getInfoByName.js');

const app = express();

app.get('/', (req, res) => res.sendStatus(200));

app.get('/v1/countries', (req, res) => res.json(getAllCountries()));

app.get('/v1/countries/code/:code', (req, res) => res.json(getInfoByCountryCode(req.params.code)));

app.get('/v1/countries/name/:name', (req, res) => res.json(getInfoByName(req.params.name)));

module.exports = app;
