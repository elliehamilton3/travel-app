const db = require('../db/db.js');
const Country = require('../models/country');

// eslint-disable-next-line consistent-return
function getInfoByCountryCode(code) {
  // TODO: Add error handling
  let country;
  try {
    country = db.one('SELECT * FROM countries WHERE alpha = $1', [code]);
    return (
      new Country(
        country.name,
        country.alpha,
        country.code,
        country.iswatersafe,
        country.waterinfo,
      ).getResponseData());
  } catch (e) {
    // TODO: Handle error
  }
}

module.exports = getInfoByCountryCode;
