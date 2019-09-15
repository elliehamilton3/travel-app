const db = require('../db/db.js');

function getAllCountries() {
  // TODO: Add error handling
  return db.any('SELECT * FROM countries');
}

module.exports = getAllCountries;
