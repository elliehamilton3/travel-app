const express = require('express');

const getAllCountries = require('./businessLogic/getAllCountries.js');
const getInfoByCountryCode = require('./businessLogic/getInfoByCountryCode.js');
const getInfoByName = require('./businessLogic/getInfoByName.js');

const app = express();

app.get('/', (req, res) => res.sendStatus(200));

app.get('/v1/countries', async (req, res) => res.json(await getAllCountries()));

app.get('/v1/countries/code/:code', async (req, res) => res.json(await getInfoByCountryCode(req.params.code)));

app.get('/v1/countries/name/:name', async (req, res) => res.json(await getInfoByName(req.params.name)));

module.exports = app;
