const db = require('../db/db.js');

function getInfoByName(name) {
  return db.one('SELECT * FROM countries WHERE name = $1', [name]);
}

module.exports = getInfoByName;
