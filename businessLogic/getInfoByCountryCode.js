const db = require('../db/db.js');

function getInfoByCountryCode(code) {
  return db.one('SELECT * FROM countries WHERE alpha = $1', [code]);
}
// Handle case issues

module.exports = getInfoByCountryCode;
