const getAllCountries = require('endpoints/countries/all.get.js');
const getInfoByCountryCode = require('endpoints/countries/code.get.js');
const getInfoByName = require('endpoints/countries/name.get.js');

module.exports = {
  getAllCountries,
  getInfoByCountryCode,
  getInfoByName,
};
