const getAllCountries = require('./countries/all.get.js');
const getInfoByCountryCode = require('./countries/code.get.js');
const getInfoByName = require('./countries/name.get.js');

module.exports = {
  getAllCountries,
  getInfoByCountryCode,
  getInfoByName,
};
