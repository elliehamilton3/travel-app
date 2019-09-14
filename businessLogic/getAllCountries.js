const db = require('../db/db.js');

function getAllCountries() {
  // try {
  return db.any('SELECT * FROM countries');
  // } catch (e) {
  //   console.log(e);
  // }
  // Format data
}

module.exports = getAllCountries;
