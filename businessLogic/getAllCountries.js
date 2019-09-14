const db = require('../db.json');

function getAllCountries() {
  return db;
}

module.exports = getAllCountries;
