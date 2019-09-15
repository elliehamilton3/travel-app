const db = require('../db/db.js');

function getInfoByName(name) {
  // TODO: Add error handling
  return db.one('SELECT * FROM countries WHERE name = $1', [name]);
}

module.exports = getInfoByName;
