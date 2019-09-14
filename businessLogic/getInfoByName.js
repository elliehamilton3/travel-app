const db = require('../db.json');

function getInfoByName(name) {
  return db.find(country => country.name === name);
}

module.exports = getInfoByName;
