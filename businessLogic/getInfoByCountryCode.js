const db = require('../db.json');

function getInfoByCountryCode(code) {
  return db.find(country => country['alpha-3'] === code);
}

module.exports = getInfoByCountryCode;
