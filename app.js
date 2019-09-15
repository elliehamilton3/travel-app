const express = require('express');

const app = express();

const {
  getAllCountries,
  getInfoByCountryCode,
  getInfoByName,
} = require('./endpoints');

app.get('/', (req, res) => res.sendStatus(200));

app.get('/v1/countries', getAllCountries);
app.get('/v1/countries/code/:code', getInfoByCountryCode);
app.get('/v1/countries/name/:name', getInfoByName);

module.exports = app;
