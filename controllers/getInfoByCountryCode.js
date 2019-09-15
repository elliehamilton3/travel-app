const db = require('../db/db.js');

function getInfoByCountryCode(code) {
  // TODO: Add error handling
  return db.one('SELECT * FROM countries WHERE alpha = $1', [code]);
}

module.exports = getInfoByCountryCode;
