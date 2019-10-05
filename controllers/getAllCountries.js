const db = require('../db/db.js');
const Country = require('../models/country');

// TODO: Fix error handling
// eslint-disable-next-line consistent-return
function getAllCountries() {
  // TODO: Move db access to model
  let countries;
  try {
    countries = db.any('SELECT * FROM countries');
    return countries.map(country => (
      new Country(
        country.name,
        country.alpha,
        country.code,
        country.iswatersafe,
        country.waterinfo,
      )).getResponseData());
  } catch (e) {
    // TODO: Handle error
  }
}

module.exports = getAllCountries;
