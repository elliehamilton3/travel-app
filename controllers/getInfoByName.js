const db = require('../db/db.js');
const Country = require('../models/country');

// eslint-disable-next-line consistent-return
function getInfoByName(name) {
  // TODO: Add error handling
  let country;
  try {
    country = db.one('SELECT * FROM countries WHERE name = $1', [name]);
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

module.exports = getInfoByName;
